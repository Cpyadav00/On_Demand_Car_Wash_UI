import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { InvoiveMailService } from 'src/app/services/invoive-mail.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-rest-password-form',
  templateUrl: './rest-password-form.component.html',
  styleUrls: ['./rest-password-form.component.css']
})
export class RestPasswordFormComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private auth:AuthService,
    private router:Router,
    private toast:NgToastService,
    private userStore:UserStoreService,
    private invoiveEmailServ:InvoiveMailService
    ){}
  ngOnInit():void{

    this.loginForm=this.fb.group({
      email:['',Validators.required]
    })
  }




  resetPassword(){
    if(this.loginForm.valid){
      //console.log(this.loginForm.value)
      this.invoiveEmailServ.resetPassword(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          //console.log(res);
          if(res==true){
          this.toast.success({detail:"SUCCESS",summary:"Email Sent",duration:5000})
          this.router.navigate(['/home'])
          }
          else
          this.toast.error({detail:"ERROR",summary:"Email is not valid",duration:5000});
        }
        //to print error
        ,error:(err)=>{
          //alert(err?.error.message);
          this.toast.error({detail:"ERROR",summary:err.message,duration:5000});

        }
      })
    }
    else{
      alert("Your form is invalid");
    }
  }


}

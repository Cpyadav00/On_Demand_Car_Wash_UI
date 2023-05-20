import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){}

  ngOnInit():void{

    this.signupForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      phoneNumber:['',Validators.required]
    })
  }

  onSignUp(){
    if(this.signupForm.valid){
     this.auth.signUp(this.signupForm.value)
     .subscribe({
      next:(res)=>{
        alert(res.message);
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      error:(err)=>{
        alert(err?.error.message);
      }
     })
    }
    else{

      this.vaildateAllFormFields(this.signupForm);
      alert("Your form is invalid");
    }
  }

  private vaildateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field=>{
      const control=formGroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }
      else if(control instanceof FormGroup){
        this.vaildateAllFormFields(control)
      }
    })
  }
}

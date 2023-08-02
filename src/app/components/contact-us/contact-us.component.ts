import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ContactUs } from 'src/app/models/contactUs.model';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor(
    private contserv:ContactUsService,
    private toast:NgToastService,
    private router:Router
  ){}

 public contactUs:ContactUs=new ContactUs();

  submitForm(contactForm:NgForm) {
    // Here you can implement your desired logic, such as sending the form data to a backend server
if(contactForm.valid)
{
  //console.log(contactForm.value);
  this.contserv.postContactUs(contactForm.value)
  .subscribe({
    next:(res=>{
      this.toast.success({detail:"SUCCESS",summary:"Query Registered Successfully",duration:5000});
     this.router.navigate(['/home'])
      //window.location.reload();
    }),
    error:(err=>{
      this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});
    })
  })
}
else
this.toast.error({detail:"ERROR",summary:"Required Field is Missing",duration:5000});

  }



}

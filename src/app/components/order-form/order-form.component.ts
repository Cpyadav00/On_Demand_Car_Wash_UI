import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
orderFormData!:FormGroup

constructor(private fb:FormBuilder,private router:Router,private toast:NgToastService){}

ngOnInit():void{

  this.orderFormData=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    phoneNumber:['',Validators.required]
  })
}



  onSave(){

  }

}

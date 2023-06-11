import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { OrderForm } from 'src/app/models/orderForm.model';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {


constructor(private router:Router,private toast:NgToastService){}

orderform!:OrderForm

ngOnInit():void{

}



  onSave(myformdata:NgForm){

  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { OrderForm } from 'src/app/models/orderForm.model';
import { Orders } from 'src/app/models/orders.model';
import { Card } from 'src/app/models/payment.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderViewTableService } from 'src/app/services/order-view-table.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  public card:Card=new Card()
 private orderobj:OrderForm=new OrderForm()
 private id!:number

  cardForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private toast:NgToastService,
    private auth:AuthService,
    private orderser:OrderformService,
    private userStore:UserStoreService,


    ){}
  ngOnInit():void{

    this.cardForm=this.fb.group({
      id:['',Validators.required],
      cardHolderName:['',Validators.required],
      expiry:['',Validators.required],
      cvv:['',Validators.required],
      cardNumber:['',Validators.required]
    })

    this.userStore.getId()
    .subscribe(val=>{
      let idFromToken=this.auth.getId();
      this.id=val || idFromToken
    });
  }

  onSave(myformdata:NgForm){
    this.orderser.orderformobj.payment=this.card
    this.card.id=this.orderser.orderformobj.paymentId
    this.card.customerId=this.id
    let givendate=new Date(this.orderser.orderformobj.isScheduledLater)
    let todayDate=new Date()
   let giventime=givendate.getTime()
   if(givendate>todayDate){
    this.orderser.updateOrder()
    .subscribe(val=>{
      this.toast.success({detail:"SUCCESS",summary:"Payment Was Successfull",duration:5000});
     //this.orderser.orderformobj=
      // let myObject=this.orderser.orderformobj
      // window.localStorage.setItem("orderId", myObject.id.toString());
      //   console.log(window.localStorage.getItem("orderId"))
    })
  }
  else{
    this.toast.error({detail:"ERROR",summary:"Date is not valid",duration:5000});
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


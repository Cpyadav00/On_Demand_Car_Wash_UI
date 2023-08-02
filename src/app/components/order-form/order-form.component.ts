import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Address } from 'src/app/models/address.model';
import { Car } from 'src/app/models/car.model';
import { OrderForm } from 'src/app/models/orderForm.model';
import { UserStoreService } from 'src/app/services/user-store.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { OrderViewTableService } from 'src/app/services/order-view-table.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {


constructor(private router:Router,
  private toast:NgToastService,
  private userStore:UserStoreService,
  private auth:AuthService,
public orderser:OrderformService,
private orderview:OrderViewTableService

  ){}
  //public oredrobj!:OrderForm
 fullNames:string=""
 id:string=""

ngOnInit():void{
  this.userStore.getId()
  .subscribe(val=>{
    let idFromToken=this.auth.getId();
    this.id=val || idFromToken
  });
}


onSave(myForm: NgForm) {
  // Check if the form is valid before submitting
  if (myForm.valid) {
  this.orderser.orderformobj.custId=this.id
let givendate=new Date(this.orderser.orderformobj.isScheduledLater)

var message=isValidDateTime(givendate);

if(message=="Valid")
{

  this.orderview.setDataForPreview(this.orderser.orderformobj)
  this.router.navigate(['/home','selectpackage','form','orderview'])
}
else
{
  this.toast.error({detail:"ERROR",summary:message,duration:5000});
}

// function to validate date and time
function isValidDateTime(dateTime: Date): string {
  const currentDate = new Date();

  // Check if date is greater than today
  if (dateTime < currentDate) {
    return "Date is not valid";
  }

  // Check if it's today's date and time is at least 3 hours from current time
  if (dateTime.toDateString() === currentDate.toDateString()) {
    const threeHoursLater = new Date(currentDate.getTime() + (3 * 60 * 60 * 1000));

    if (dateTime < threeHoursLater) {
      return "Time should 3hr from current time ";
    }
  }

  // Check if time is between 9am and 6pm
  const startTime = new Date(dateTime.toDateString() + ' 09:00');
  const endTime = new Date(dateTime.toDateString() + ' 18:00');

  if (dateTime < startTime || dateTime > endTime) {
    return "Service time is 9AM to 6PM";
  }

  return "Valid";
}





 }
 else{
  this.toast.error({detail:"ERROR",summary:"Required Field is Missing",duration:5000});
 }


  }


}

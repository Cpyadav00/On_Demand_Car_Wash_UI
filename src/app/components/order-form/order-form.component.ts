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
    let fullNameFromToken=this.auth.getId();
    this.id=val || fullNameFromToken
  });

this.userStore.getFullNameFromStore()
.subscribe(val=>{
  let fullNameFromToken=this.auth.getFullNameFromToken();
  this.fullNames=val || fullNameFromToken
});
}


 onSave(myformdata:NgForm){
 this.orderser.orderformobj.custId=this.id
 this.orderser.orderformobj.customerName=this.fullNames
 this.orderser.addData()
 .subscribe(data=>{
  this.toast.success({detail:"SUCCESS",duration:5000});
 this.orderview.setDataForPreview(data)
 this.router.navigate(['/home','form','selectpackage'])

})
  }


}

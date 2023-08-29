import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderForm } from 'src/app/models/orderForm.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalOrders:number=0
  deliveredOrders:number=0
  notDeliveredOrders:number=0
  totalCustomer:number=0
  activeCustomer:number=0
  notActiveCustomer:number=0
  totalWasher:number=0
  activeWasher:number=0
  notActiveWasher:number=0
  requests:any=[]

private roles!:string; //! for not defining any value
revenue:any
constructor(private api:ApiService,
  private auth:AuthService,
  private userStore:UserStoreService,
  private orderserv:OrderformService,
  private router:Router
  ){}

ngOnInit() {
this.orderserv.revenue()
.subscribe(val=>{
  this.revenue=val;
})

this.orderserv.getAllOrder()
.subscribe(val=>{
  this.totalOrders=val.length;
  for (var item of val) {
    if (item.status == "Delivered") {
      this.deliveredOrders++;
    }
    else if (item.status == "Not Delivered") {
      this.notDeliveredOrders++;
    }
  }
})
this.api.getCustomer()
.subscribe(val=>{
  this.totalCustomer=val.length;
  for (var item of val) {
    if (item.status == "Active") {
      this.activeCustomer++;
    }
    else if (item.status == "InActive") {
      this.notActiveCustomer++;
    }
  }
})

this.api.getWasher()
.subscribe(val=>{
  this.totalWasher=val.length;
  for (var item of val) {
    if (item.status == "Active") {
      this.activeWasher++;
    }
    else if (item.status == "InActive") {
      this.notActiveWasher++;
    }
  }
})


}

isRole(){
if(this.roles=="Admin")
return true;
return false;
}




}

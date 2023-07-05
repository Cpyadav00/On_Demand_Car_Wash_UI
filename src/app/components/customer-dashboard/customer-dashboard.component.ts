import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { OrderForm } from 'src/app/models/orderForm.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  totalOrders:number=0
  deliveredOrders:number=0
  notDeliveredOrders:number=0
  canceledOrders:number=0

  netMoney:number=0
  tax:number=0
  packagePrice:number=0

  totalService:number=0
  activeService:number=0
  notActiveService:number=0

  customerId:number=this.auth.getId();
  requests:any=[]
revenue:any
constructor(private api:ApiService,
  private auth:AuthService,
  private userStore:UserStoreService,
  private orderserv:OrderformService,
  private packServ:ProductServiceService,
  private router:Router
  ){}

ngOnInit() {
this.orderserv.getAllOrdersByIdForCustomer(this.customerId)
.subscribe(val=>{
  this.totalOrders=val.length;
  for(var item of val)
  {
    if (item.status == "Delivered") {
      this.deliveredOrders++;
    }
    else if (item.status == "Not Delievered") {
      this.notDeliveredOrders++;
    }
    else if(item.status == "Cancel")
    {
      this.canceledOrders++;
    }
   this.netMoney+=item.totalCost;
   this.packagePrice+=(item.totalCost*10)/11;
   this.tax+=item.totalCost*.01
  }

})

this.packServ.getPackage()
.subscribe(val=>{
this.totalService=val.length
for(var item of val)
{
  if(item.status=="Available")
  this.activeService++;
  else
  this.notActiveService++;
}
})

}


  isRole(){
    if(this.auth.getRoleFromToken()=="Customer")
    return true;
    return false;
    }



}

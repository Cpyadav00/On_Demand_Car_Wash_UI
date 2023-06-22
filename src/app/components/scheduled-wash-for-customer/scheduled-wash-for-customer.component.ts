import { Component } from '@angular/core';
import { OrderForm } from 'src/app/models/orderForm.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { WashRequestService } from 'src/app/services/wash-request.service';

@Component({
  selector: 'app-scheduled-wash-for-customer',
  templateUrl: './scheduled-wash-for-customer.component.html',
  styleUrls: ['./scheduled-wash-for-customer.component.css']
})
export class ScheduledWashForCustomerComponent {
  public order:any=[];
  private userId:number=0
  constructor(
    private orderserv:OrderformService,
    private requestserv:WashRequestService,
    private userStore:UserStoreService,
    private auth:AuthService
  ){
    this.userStore.getId()
    .subscribe(val=>{
      let idFromToken=this.auth.getId();
      this.userId=val || idFromToken
    });
  }

  ngOnInit(){
    this.requestserv.scheduledWashForCustomer(this.userId)
    .subscribe(val=>{
      this.order=val
    })

  }

  updateDelivery(id:number){
    this.orderserv.getOrderById(id)
    .subscribe(val1=>{
     val1.status="Delivered"
      this.orderserv.updateOrder(val1)
      .subscribe(val2=>{
        console.log(val2);
      })
    })
    //window.location.reload();
  }

  updateDeliveryAndPay(id:number){
    this.orderserv.getOrderById(id)
    .subscribe(val1=>{
     val1.status="Delivered"
     val1.paymentStatus="Paid"
      this.orderserv.updateOrder(val1)
      .subscribe(val2=>{
        console.log(val2);
      })
    })
    //window.location.reload();
  }

  populate(item:OrderForm){
    this.orderserv.orderformobj=item
  }



}

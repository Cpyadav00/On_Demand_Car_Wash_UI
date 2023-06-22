import { Component } from '@angular/core';
import { OrderForm } from 'src/app/models/orderForm.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  public requests:any=[]
  public fullName=this.auth.getFullNameFromToken();
  public id:number=0
  private order:OrderForm=new OrderForm()

  constructor(
    private auth:AuthService,
    private orderserv:OrderformService,
    private userStore:UserStoreService
    ){
      this.userStore.getId()
      .subscribe(val=>{
        let idFromToken=this.auth.getId();
        this.id=val || idFromToken
      });
  }

  ngOnInit(){

    this.orderserv.AllPreviousOrderForCustomer(this.id)
    .subscribe(val=>{
      this.requests=val;
    })



  }

  isRole(){
    if(this.auth.getRoleFromToken()=="Customer")
    return true;
    return false;
    }

    changeToPaid(id:number){
      this.orderserv.getOrderById(id)
      .subscribe(val1=>{
        val1.paymentStatus="Paid"
        this.orderserv.updateOrder(val1)
        .subscribe(val2=>{
        })
      })
      window.location.reload();
    }

    populate(item:OrderForm){
      this.orderserv.orderformobj=item
    }


}

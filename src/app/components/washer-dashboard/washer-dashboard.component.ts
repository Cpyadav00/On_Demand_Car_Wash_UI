import { Component } from '@angular/core';
import { OrderForm } from 'src/app/models/orderForm.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-washer-dashboard',
  templateUrl: './washer-dashboard.component.html',
  styleUrls: ['./washer-dashboard.component.css']
})
export class WasherDashboardComponent {

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

    this.orderserv.getAllPrevoiusOrder(this.id)
    .subscribe(val=>{
      this.requests=val;
    })



  }

  isRole(){
    if(this.auth.getRoleFromToken()=="Washer")
    return true;
    return false;
    }

    changeToPaid(id:number){
      this.orderserv.getOrderById(id)
      .subscribe(val1=>{
        val1.paymentStatus="Paid"
        this.orderserv.updateOrder(val1)
        .subscribe(val2=>{
          console.log(val2);
        })
      })
      //window.location.reload();
    }


}

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
  public requests:any=[]
public fullNames!:string;
public roles!:string; //! for not defining any value
constructor(private api:ApiService,
  private auth:AuthService,
  private userStore:UserStoreService,
  private orderserv:OrderformService,
  private router:Router
  ){}

ngOnInit() {

this.userStore.getFullNameFromStore()
.subscribe(val=>{
  let fullNameFromToken=this.auth.getFullNameFromToken();
  this.fullNames=val || fullNameFromToken
});

this.userStore.getRoleFromStore()
.subscribe(val=>{
  let roleFromToken=this.auth.getRoleFromToken()
  this.roles=val || roleFromToken
})

this.orderserv.allDeliveredOrderForAdmin()
.subscribe(val=>{
  this.requests=val;
})

}

isRole(){
if(this.roles=="Admin")
return true;
return false;
}


populate(item:OrderForm){
  this.orderserv.orderformobj=item
}


}

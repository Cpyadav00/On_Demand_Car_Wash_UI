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
}

isRole(){
if(this.roles=="Admin")
return true;
return false;
}




}

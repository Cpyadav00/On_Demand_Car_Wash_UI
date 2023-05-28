import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

public fullNames!:string;
public roles!:string; //! for not defining any value
constructor(private api:ApiService,
  private auth:AuthService,
  private userStore:UserStoreService,
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


}

isRole(){
if(this.roles=="Admin")
return true;
return false;
}

}

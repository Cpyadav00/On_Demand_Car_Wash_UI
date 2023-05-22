import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

  constructor(private auth:AuthService){

  }
public fullName=this.auth.getFullNameFromToken();


  isRole(){
    if(this.auth.getRoleFromToken()=="Customer")
    return true;
    return false;
    }

}

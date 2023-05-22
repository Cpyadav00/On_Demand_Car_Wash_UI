import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-washer-dashboard',
  templateUrl: './washer-dashboard.component.html',
  styleUrls: ['./washer-dashboard.component.css']
})
export class WasherDashboardComponent {

  constructor(private auth:AuthService){

  }
  public fullName=this.auth.getFullNameFromToken();

  isRole(){
    if(this.auth.getRoleFromToken()=="Washer")
    return true;
    return false;
    }

}

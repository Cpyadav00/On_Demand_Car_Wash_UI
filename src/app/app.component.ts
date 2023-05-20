import { Component } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'On_Demand_Car_Wash_UI';

  constructor(private auth:AuthService){}
  isLoggedIn(){
    if(this.auth.isLoggedIn())
    return true;
    return false;
  }
  logout(){
    
  }


}

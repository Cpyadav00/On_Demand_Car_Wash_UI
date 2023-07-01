import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(
  private auth:AuthService,
  public router:Router

){}

ngOnInit(){

}

logout(){
  this.auth.signOut();
}

isLoggedIn(){
  if(this.auth.isLoggedIn())
  return true;
  return false;
}


booking(){
  this.router.navigate(['/home','selectpackage'])
}


}

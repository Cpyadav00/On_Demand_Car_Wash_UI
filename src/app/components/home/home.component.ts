import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth.service';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(
  private auth:AuthService,
  public router:Router,
  private subserv:SubscriberService,
  private toast:NgToastService

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

saveData(myform:NgForm){
if(myform.valid)
{
  this.subserv.postSubscriber(myform.value)
  .subscribe(val=>{
    if(val>0)
    {
      this.toast.success({detail:"SUCCESS",summary:"Subscribed Successfully",duration:5000});
      this.router.navigate(['/home'])
    }
    else{
      this.toast.error({detail:"ERROR",summary:"Please Enter a valid email",duration:5000});
    }
  })
}
}

}

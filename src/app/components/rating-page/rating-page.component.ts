import { Component } from '@angular/core';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { Rating } from 'src/app/models/rating.model';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.css']
})
export class RatingPageComponent {
    washerRating!:number;
   user:User=new User();

  rating: Rating=new Rating();
  averageRating:any;
  orderid=window.localStorage.getItem("orderId")
  constructor(
    private ratingserv:RatingService,
    private orderserv:OrderformService,
    private api:ApiService,
    private toast:NgToastService
  ){
   this.api.getByIdUser(this.orderserv.orderformobj.washerId)
   .subscribe(val=>{
   this.user=val;
   this.user.id=this.orderserv.orderformobj.washerId;
   })
   this.ratingserv.getRatingById(this.orderserv.orderformobj.washerId)
   .subscribe(val=>{
    this.averageRating=val;
   })
  }

  rateWasher() {
    const rating1 = (document.getElementById('1') as HTMLInputElement).checked;
    const rating2 = (document.getElementById('2') as HTMLInputElement).checked;
    const rating3 = (document.getElementById('3') as HTMLInputElement).checked;
    const rating4 = (document.getElementById('4') as HTMLInputElement).checked;
    const rating5 = (document.getElementById('5') as HTMLInputElement).checked;

    if (rating1) {
      this.washerRating = 1;
    } else if (rating2) {
      this.washerRating = 2;
    } else if (rating3) {
      this.washerRating = 3;
    } else if (rating4) {
      this.washerRating = 4;
    } else if (rating5) {
      this.washerRating = 5;
    }

    this.rating.ratingsOfWasher = this.washerRating;
    this.rating.washerId=this.orderserv.orderformobj.washerId
    this.rating.orderId=this.orderserv.orderformobj.id
    this.ratingserv.addrating(this.rating)
    .subscribe(val=>{
      this.toast.success({detail:"SUCCESS",summary:"Rated Successfully",duration:5000});

    })

  }


}

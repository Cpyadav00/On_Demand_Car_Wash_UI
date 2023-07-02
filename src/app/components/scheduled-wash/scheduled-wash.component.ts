import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderForm } from 'src/app/models/orderForm.model';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';
import { WashRequestService } from 'src/app/services/wash-request.service';

@Component({
  selector: 'app-scheduled-wash',
  templateUrl: './scheduled-wash.component.html',
  styleUrls: ['./scheduled-wash.component.css']
})
export class ScheduledWashComponent {

  public order:any=[];
  private userId:number=0
  constructor(
    private orderserv:OrderformService,
    private requestserv:WashRequestService,
    private userStore:UserStoreService,
    private auth:AuthService,
    private carserv:CarService,
    private router:Router
  ){
    this.userStore.getId()
    .subscribe(val=>{
      let idFromToken=this.auth.getId();
      this.userId=val || idFromToken
    });
  }

  ngOnInit(){
    this.requestserv.getsheduled(this.userId)
    .subscribe(val=>{
      this.order=val
    })

  }

  updateDelivery(id:number){
    this.orderserv.getOrderById(id)
    .subscribe(val1=>{
     val1.status="Delivered"
      this.carserv.getCarById(val1.carId)
      .subscribe(carVal=>{
        carVal.status="Delivered"
        this.carserv.updateCar(carVal)
        .subscribe(updVal=>{
          console.log(updVal);
        })
      })
      this.orderserv.updateOrder(val1)
      .subscribe(val2=>{
       // console.log(val2);
      })
    })
    //window.location.reload();
  }

  updateDeliveryAndPay(id:number){
    this.orderserv.getOrderById(id)
    .subscribe(val1=>{
     val1.status="Delivered"
     val1.paymentStatus="Paid"
     this.carserv.getCarById(val1.carId)
     .subscribe(carVal=>{
       carVal.status="Delivered"
       this.carserv.updateCar(carVal)
       .subscribe(updVal=>{
         console.log(updVal);
       })
     })
      this.orderserv.updateOrder(val1)
      .subscribe(val2=>{
        console.log(val2);
      })
    })
    //window.location.reload();
  }

  populate(item:OrderForm){
    this.orderserv.orderformobj=item
  }


  pageSize: number = 7;
    currentPage: number = 1;

    get totalPages(): number {
      return Math.ceil(this.order.length / this.pageSize);
    }

    get pagedUsers(): any[] {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.order.slice(startIndex, endIndex);
    }

    get pages(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    changePage(page: number): void {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
      this.router.navigate(['/washer','scheduled'])
    }





}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderForm } from 'src/app/models/orderForm.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-completed-order-washer',
  templateUrl: './completed-order-washer.component.html',
  styleUrls: ['./completed-order-washer.component.css']
})
export class CompletedOrderWasherComponent {

  public requests:any=[]
  public id:number=0
  private order:OrderForm=new OrderForm()

  constructor(
    private auth:AuthService,
    private orderserv:OrderformService,
    private userStore:UserStoreService,
    private router:Router
    ){
      this.userStore.getId()
      .subscribe(val=>{
        let idFromToken=this.auth.getId();
        this.id=val || idFromToken
      });
  }

  ngOnInit(){

    this.orderserv.getAllPrevoiusOrder(this.id)
    .subscribe(val=>{
      this.requests=val;
    })
  }


    changeToPaid(id:number){
      this.orderserv.getOrderById(id)
      .subscribe(val1=>{
        val1.paymentStatus="Paid"
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
      return Math.ceil(this.requests.length / this.pageSize);
    }

    get pagedUsers(): any[] {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.requests.slice(startIndex, endIndex);
    }

    get pages(): number[] {
      return Array.from({ length: this.totalPages }, (_, index) => index + 1);
    }

    changePage(page: number): void {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
      this.router.navigate(['/washer','completedOrders'])
    }


}

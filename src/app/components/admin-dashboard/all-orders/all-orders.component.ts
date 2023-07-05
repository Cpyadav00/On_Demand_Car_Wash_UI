import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderForm } from 'src/app/models/orderForm.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent {
  public requests:any=[]
  public fullNames!:string;
  public roles!:string; //! for not defining any value
  constructor(private api:ApiService,
    private auth:AuthService,
    private userStore:UserStoreService,
    private orderserv:OrderformService,
    private router:Router
    ){}

  ngOnInit() {
  this.orderserv.allDeliveredOrderForAdmin()
  .subscribe(val=>{
    this.requests=val;
  })

  }


  populate(item:OrderForm){
    this.orderserv.orderformobj=item
  }
  

  pageSize: number = 8;
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.requests.length / this.pageSize);
  }

  get pagedRequests(): any[] {
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
    this.router.navigate(['/admin','completedOrders']);
  }


}

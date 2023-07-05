import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-side-bar',
  templateUrl: './customer-side-bar.component.html',
  styleUrls: ['./customer-side-bar.component.css']
})
export class CustomerSideBarComponent {
constructor(
  private router:Router
){}

  scheduled(){
    this.router.navigate(['/customer','scheduled'])
   }
   profile(){
    this.router.navigate(['/customer','profile'])
   }
   dashboard(){
    this.router.navigate(['/customer'])
      }

      completedOrders(){
        this.router.navigate(['/customer','completedOrders'])
          }
}

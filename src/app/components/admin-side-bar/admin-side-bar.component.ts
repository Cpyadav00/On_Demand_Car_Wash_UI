import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderformService } from 'src/app/services/orderform.service';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css']
})
export class AdminSideBarComponent {
constructor(
  private router:Router
){}


  users(){
this.router.navigate(['/admin','allUsers'])
  }
  admin(){
    this.router.navigate(['/admin','adminList'])
      }
      washer(){
        this.router.navigate(['/admin','washersList'])
          }
          customer(){
            this.router.navigate(['/admin','customerList'])
              }
              cars(){
                this.router.navigate(['/admin','cars'])
                  }
                  address(){
                    this.router.navigate(['/admin','addressList'])
                      }
                      orders(){
                        this.router.navigate(['/admin','orders'])
                          }
                          packages(){
                            this.router.navigate(['/admin','services'])
                              }
                              subscriber(){
                                this.router.navigate(['/admin','subscriber'])
                                  }
                                  contact(){
                                    this.router.navigate(['/admin','contactus'])
                                      }
                                      profile(){

                                        this.router.navigate(['/admin','profile'])
                                          }
                                          completed(){

                                            this.router.navigate(['/admin','completedOrders'])
                                              }
                                              dashboard(){
                                                this.router.navigate(['/admin'])
                                                  }





}

import { Component } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Car } from 'src/app/models/car.model';
import { OrderForm } from 'src/app/models/orderForm.model';
import { Package } from 'src/app/models/package.model';
import { User } from 'src/app/models/user.model';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  package:any
constructor(
  private productserv:ProductServiceService,
){

}

ngOnInit(){
  // window.location.reload()
  this.productserv.getPackage()
  .subscribe(val=>{
    this.package=val;
    console.log("Product data",this.package)
  })
}



}

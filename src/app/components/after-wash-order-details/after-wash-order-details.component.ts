import { Component } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Car } from 'src/app/models/car.model';
import { OrderForm } from 'src/app/models/orderForm.model';
import { Package } from 'src/app/models/package.model';
import { User } from 'src/app/models/user.model';
import { AddressService } from 'src/app/services/address.service';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { CarService } from 'src/app/services/car.service';
import { OrderformService } from 'src/app/services/orderform.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-after-wash-order-details',
  templateUrl: './after-wash-order-details.component.html',
  styleUrls: ['./after-wash-order-details.component.css']
})
export class AfterWashOrderDetailsComponent {
  package:Package=new Package()
  order:OrderForm=new OrderForm()
  car:Car=new Car()
  address:Address=new Address()
  orderid:any
  packageId:any
  carId:any
  washerId:any
  addressId:any
  user:User=new User()
  customerName:any
constructor(

  public orderser:OrderformService,
  private productserv:ProductServiceService,
  private carserv:CarService,
  private addresserv:AddressService,
  private auth:AuthService,
  private userStore:UserStoreService,
  private apiserv:ApiService
){
  //window.location.reload()
  this.orderid=this.orderser.orderformobj.id
  this.addressId=this.orderser.orderformobj.addressId
  this.carId=this.orderser.orderformobj.carId
  this.packageId=this.orderser.orderformobj.packageId
  this.washerId=this.orderser.orderformobj.washerId
  // console.log(window.localStorage.getItem("customerName"))
 // window.localStorage.clear()
}



ngOnInit(){
  // window.location.reload()
  this.productserv.getPackageById(this.packageId)
  .subscribe(val=>{
    this.package=val;
    // console.log("Product data",val)
  })
  this.orderser.getOrderById(this.orderid)
  .subscribe(val=>{
 this.order=val;
//  console.log("Order data",val)
  })

  this.carserv.getCarById(this.carId)
  .subscribe(val=>{
this.car=val
// /console.log("Car data",val)
  })

  this.addresserv.getAddressById(this.addressId)
  .subscribe(val=>{
    this.address=val
   // console.log("Address data",val)
  })

  this.apiserv.getByIdUser(this.washerId)
  .subscribe(val=>{
    this.user=val
    console.log(val)
  })


}


}

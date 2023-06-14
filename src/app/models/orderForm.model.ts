import { Address } from "./address.model";
import { Car } from "./car.model";

export class OrderForm{
  id:number=0;
  date_time!:Date
  customerName:string="";
  status!:string
  paymentStatus!:string
  totalCost:number=2000;
  instructions:string="";
  custId!:string;
  addressId:number=0;
  packageId:number=1;
  carId:number=0;
 address:Address=new Address()
 car:Car=new Car()

}

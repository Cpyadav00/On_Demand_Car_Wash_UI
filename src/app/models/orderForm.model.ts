import { Address } from "./address.model";
import { Car } from "./car.model";
import { Card } from "./payment.model";

export class OrderForm{
  id:number=0;
  isScheduledLater!:Date
  date_time:Date=new Date()
  customerName:string="";
  status!:string
  paymentStatus!:string
  paymentId!:number
  phoneNumber!:number
  totalCost:number=0;
  instructions:string="";
  custId!:string;
  addressId:number=0;
  packageId:number=0;
  carId:number=0;
 address:Address=new Address()
 car:Car=new Car()
 payment:Card=new Card()

}

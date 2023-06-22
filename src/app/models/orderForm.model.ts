import { Address } from "./address.model";
import { Car } from "./car.model";
import { Card } from "./payment.model";

export class OrderForm{
  id:number=0;
  isScheduledLater!:Date
  date_Time:Date=new Date()
  customerName:string="";
  status!:string
  paymentStatus!:string
  paymentId!:number
  phoneNumber!:number
  totalCost:number=0;
  instructions:string="";
  custId!:string;
  washerId:number=0;
  addressId:number=0;
  packageId:number=0;
  carId:number=0;
 address:Address=new Address()
 car:Car=new Car()

}


/*
{id: 115, date_Time: "2023-06-20T05:25:09.454", totalCost: 550, status: "Not Delievered",…}
address
:
null
addressId
:
126
car
:
null
carId
:
116
custId
:
28
date_Time
:
"2023-06-20T05:25:09.454"
id
:
115
instructions
:
"washing"
isScheduledLater
:
"2023-06-23T15:55:00"
packageId
:
4
paymentId
:
40
paymentStatus
:
"Paid"
phoneNumber
:
1234567890
status
:
"Not Delievered"
totalCost
:
550
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { Address } from '../models/address.model';
import { OrderForm } from '../models/orderForm.model';

@Injectable({
  providedIn: 'root'
})
export class OrderformService {

  public orderformobj:OrderForm=new OrderForm()


  constructor(private http:HttpClient) { }

  // demoaddData(){
  //   return this.orderformobj
  // }
  addData(orderformobj1:OrderForm){

    return this.http.post<OrderForm>("https://localhost:44354/api/Order/AddOrder",orderformobj1)
  }
updateOrder(order:OrderForm)
{
  return this.http.put<OrderForm>("https://localhost:44354/api/Order/UpdateOrder",order)
}
getOrderById(id:number){
  return this.http.get<OrderForm>("https://localhost:44354/api/Order/GetOrder/"+id)
}

getAllPrevoiusOrder(id:number){
  return this.http.get<OrderForm>("https://localhost:44354/api/Order/AllPreviousOrder/"+id)
}
AllPreviousOrderForCustomer(id:number){
  return this.http.get<OrderForm>("https://localhost:44354/api/Order/AllPreviousOrderForCustomer/"+id)
}

allDeliveredOrderForAdmin(){
  return this.http.get<OrderForm>("https://localhost:44354/api/Order/AllDeliveredOrderForAdmin/")
}


revenue(){
  return this.http.get<any>("https://localhost:44354/api/Order/Revenue")
}

}

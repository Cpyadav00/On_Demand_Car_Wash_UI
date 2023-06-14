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

  addData(){

    return this.http.post<OrderForm>("https://localhost:44354/api/Order/AddOrder",this.orderformobj)
  }


}

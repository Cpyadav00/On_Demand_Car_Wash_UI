import { Injectable } from '@angular/core';
import { OrderForm } from '../models/orderForm.model';

@Injectable({
  providedIn: 'root'
})
export class OrderViewTableService {

  constructor() { }

  orderformobj1:OrderForm=new OrderForm()
  
  sendDataForPreview(){
    return this.orderformobj1
  }
  setDataForPreview(orderobj:any){
    this.orderformobj1=orderobj
  }

}

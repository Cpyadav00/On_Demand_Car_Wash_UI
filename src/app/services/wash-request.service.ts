import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderForm } from '../models/orderForm.model';

@Injectable({
  providedIn: 'root'
})
export class WashRequestService {

  constructor(
    private http:HttpClient
  ) { }

  getRequest(){
    //return this.http.get<any>("")
    return this.http.get<OrderForm>('https://localhost:44354/api/Order/GetAllRequest');
  }

  getsheduled(id:number){
    return this.http.get<OrderForm>("https://localhost:44354/api/Order/ScheduledWash/"+id)
  }

  scheduledWashForCustomer(id:number){
    return this.http.get<OrderForm>("https://localhost:44354/api/Order/ScheduledWashForCustomer/"+id)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
public payment:Card=new Card()

  constructor(private http:HttpClient) { }

  addPayment(){
    return this.http.post<Card>("https://localhost:44354/api/Payment/AddPayment",this.payment)
  }
}

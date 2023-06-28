import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService  {



  public invoices!:any[];
  public invoice!:any;


  constructor(private http:HttpClient) { }

  getAllInvoice(){
    return this.http.get<any>("https://localhost:44354/api/Order/GetAllOrder");
  }


}

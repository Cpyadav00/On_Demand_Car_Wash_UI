import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService  {

  private baseUrl:string="https://localhost:44354/api/ViewInvoice/";

  public invoices!:any[];
  public invoice!:any;


  constructor(private http:HttpClient) { }

  getAllInvoice(){
    return this.http.get<any>(this.baseUrl+'ViewAllInvoices');
  }

  getInvoiceById(id:number){
    return this.http.get<any>(this.baseUrl+'ViewInvoiceById/'+id);
  }

}

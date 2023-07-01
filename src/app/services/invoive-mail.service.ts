import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiveMailService {

  constructor(private http:HttpClient) { }


  sendEmail(id:number){
    return this.http.get<any>("https://localhost:44354/api/Email/GenerateAndSendInvoice/"+id);
  }

resetPassword(email:string){
  return this.http.post<any>("https://localhost:44354/api/Email/RestPasswordMail/",email);
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUs } from '../models/contactUs.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }

  postContactUs(obj:any){
    return this.http.post<any>("https://localhost:44354/api/ContactUs/AddContactUs",obj)
  }

  getAllContactUs(){
    return this.http.get<any>("https://localhost:44354/api/ContactUs/GetAllContactUs")
  }

  delete(id:number){
 return this.http.delete<any>("https://localhost:44354/api/ContactUs/DeleteContactUs/"+id)
  }


}

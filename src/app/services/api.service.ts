import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string="https://localhost:44354/api/";
  constructor(
    private http:HttpClient

  ){}

  //User Services Started


  getUser(){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetUserDetails');
  }


  getWasher(){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetWasherDetails');
  }

  getCustomer(){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetCustomers');
  }

  getAdmin(){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetAdmins');
  }

  getByIdUser(id:number){
    return this.http.get<any>(this.baseUrl+'UserDetail/GetUserById/'+id);
  }

  deleteUser(id:number){
    return this.http.delete<any>(this.baseUrl+'UserDetail/DeleteUserDetails/'+id);
  }

  updateuser(obj:any){
    return this.http.put<any>(this.baseUrl+'UserDetail/UpdateUser/',obj);
  }

  //User Services Ended






}

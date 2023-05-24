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

  deleteUser(id:number){
    return this.http.delete<any>(this.baseUrl+'UserDetail/DeleteUserDetails/'+id);
  }

  //User Services Ended

//Package service started

  getPackage(){
    return this.http.get<any>(this.baseUrl+'Package/GetAllPackage');
  }

  deletePackage(id:number){
   return this.http.delete<any>(this.baseUrl+'Package/DeletePackage/'+id);
  }




}

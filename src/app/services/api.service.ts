import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string="https://localhost:44354/api/UserDetail/";
  constructor(
    private http:HttpClient

  ){}

  getUser(){
    return this.http.get<any>(this.baseUrl+'GetUserDetails');
  }

}

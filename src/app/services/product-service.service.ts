import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl:string="https://localhost:44354/api/Package/";

  constructor(private http:HttpClient) { }

  saveProduct(userObj:any){
    return this.http.post<any>(`${this.baseUrl}AddPackage`,userObj);

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Package } from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl:string="https://localhost:44354/api/Package/";

  public productDetails!:Package[];
  public product!:Package;


  constructor(private http:HttpClient) { }

  saveProduct(userObj:any){
    return this.http.post<any>(`${this.baseUrl}AddPackage`,userObj);

  }

updatePackage(){
  return this.http.put<any>(this.baseUrl+'UpdatePackage',this.product);
}

  getPackage(){
    return this.http.get<any>('https://localhost:44354/api/Package/GetAllPackage');
  }

  getPackageById(id:number){
    return this.http.get<any>(this.baseUrl+'GetPackage/'+id);
  }

  deletePackage(id:number){
   return this.http.delete<any>(this.baseUrl+'DeletePackage/'+id);
  }



}

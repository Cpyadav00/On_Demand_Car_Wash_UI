import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  getAddressById(id:number){
return this.http.get<Address>("https://localhost:44354/api/Address/GetAddress/"+id)
  }

  getAllAddressList(){
    return this.http.get<Address>("https://localhost:44354/api/Address/GetAllAddress")
      }

}

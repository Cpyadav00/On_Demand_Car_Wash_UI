import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalorderService {
  orders!:any[]

  constructor(private http:HttpClient) { }

  getAllData(){
    return this.http.get<any>('https://localhost:44354/api/AllDataAtOnePlace/AllData');
  }
}

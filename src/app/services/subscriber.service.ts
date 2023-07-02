import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http:HttpClient) { }

  postSubscriber(obj:any){
    return this.http.post<any>("https://localhost:44354/api/Subscriber/AddSubscriber",obj)
  }

  getAllSubscriber(){
    return this.http.get<any>("https://localhost:44354/api/Subscriber/GetAllSubscriber")
  }

  delete(id:number){
    return this.http.delete<any>("https://localhost:44354/api/Subscriber/DeleteSubscriber/"+id)
  }

}

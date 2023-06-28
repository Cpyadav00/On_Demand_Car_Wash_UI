import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rating } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

  addrating(obj:Rating){
    return this.http.post<Rating>("https://localhost:44354/api/Rating/AddRating",obj)
  }
  getRatingById(id:number){

    return this.http.get<Rating>("https://localhost:44354/api/Rating/GetAverageRating/"+id)
  }

}

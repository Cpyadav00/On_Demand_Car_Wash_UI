import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl:string="https://localhost:44354/api/Car/";

  public cars!:Car[];
  public car!:Car;

  constructor(
    private http:HttpClient
    ){}

    getAllCars(){
     return this.http.get<Car>(this.baseUrl+'GetAllCar');
    }

    getCarById(id:number){
      return this.http.get<Car>(this.baseUrl+'GetCar/'+id);
     }

    deleteCar(id:number){
    return this.http.delete<Car>(this.baseUrl+'DeleteCar/'+id);
    }

}

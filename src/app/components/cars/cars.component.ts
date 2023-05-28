import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

constructor(private carservice:CarService){}

public cars:any=[];

  ngOnInit(){
    this.carservice.getAllCars()
    .subscribe(data=>{
      this.cars=data;
    })
  }

  deletingOrder(id:number){
 this.carservice.deleteCar(id)
 .subscribe({
  next:(res=>{

   window.location.reload();
  })
 })
  }

}

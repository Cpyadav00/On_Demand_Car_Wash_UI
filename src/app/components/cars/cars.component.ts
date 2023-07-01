import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

constructor(
  private carservice:CarService,
  private router:Router
  ){}

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


  pageSize: number = 8;
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.cars.length / this.pageSize);
  }

  get pagedCars(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.cars.slice(startIndex, endIndex);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
    this.router.navigate(['/admin','cars']);
  }

}

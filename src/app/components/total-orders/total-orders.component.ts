import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders.model';
import { TotalorderService } from 'src/app/services/totalorder.service';

@Component({
  selector: 'app-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.css']
})
export class TotalOrdersComponent implements OnInit{

  orders!:Orders[];
  constructor(private serv:TotalorderService){}

  ngOnInit() {
    this.serv.getAllData()
    .subscribe(res=>{
    this.orders=res;
    });
  }

  deletingOrder(id:number){

  }

}

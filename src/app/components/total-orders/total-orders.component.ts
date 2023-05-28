import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders.model';

@Component({
  selector: 'app-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.css']
})
export class TotalOrdersComponent implements OnInit{

  orders!:Orders[];

  ngOnInit() {

  }

  deletingOrder(id:number){

  }

}

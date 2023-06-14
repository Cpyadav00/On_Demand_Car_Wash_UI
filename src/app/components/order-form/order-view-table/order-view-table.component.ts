import { Component } from '@angular/core';
import { OrderForm } from 'src/app/models/orderForm.model';
import { Orders } from 'src/app/models/orders.model';
import { OrderViewTableService } from 'src/app/services/order-view-table.service';
import { OrderformService } from 'src/app/services/orderform.service';

@Component({
  selector: 'app-order-view-table',
  templateUrl: './order-view-table.component.html',
  styleUrls: ['./order-view-table.component.css']
})
export class OrderViewTableComponent {
public orderobj:OrderForm=new OrderForm()
  constructor(
public orderser:OrderformService,
public orderview:OrderViewTableService
  ){
    this.orderobj=orderview.sendDataForPreview()
    console.log(orderview.sendDataForPreview())
  }

}

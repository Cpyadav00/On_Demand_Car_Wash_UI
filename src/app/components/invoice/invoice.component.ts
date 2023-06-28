import { Component } from '@angular/core';
import { OrderForm } from 'src/app/models/orderForm.model';
import { InvoiceService } from 'src/app/services/invoice.service';
import { OrderformService } from 'src/app/services/orderform.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
public invoices!:OrderForm[]
public invoice!:any;

constructor(
  private orderserv:OrderformService,
  private invoiceservice:InvoiceService
  ){}

ngOnInit(){
 this.invoiceservice.getAllInvoice()
 .subscribe(res=>{
  this.invoices=res;
 })
}

populate(item:OrderForm){
  this.orderserv.orderformobj=item
}

}


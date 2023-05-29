import { Component } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
public invoices!:any[]
public invoice!:any;

constructor(private invoiceservice:InvoiceService){}

ngOnInit(){
 this.invoiceservice.getAllInvoice()
 .subscribe(res=>{
  this.invoices=res;
 })
}

getInviceById(id:number){
 this.invoiceservice.getInvoiceById(id)
 .subscribe(res=>{
  this.invoice=res;
 })
}

}

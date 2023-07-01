import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  private invoiceservice:InvoiceService,
  private router:Router
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


pageSize: number = 8;
currentPage: number = 1;

get totalPages(): number {
  return Math.ceil(this.invoices.length / this.pageSize);
}

get pagedInvoices(): any[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  return this.invoices.slice(startIndex, endIndex);
}

get pages(): number[] {
  return Array.from({ length: this.totalPages }, (_, index) => index + 1);
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
  this.router.navigate(['/admin','orders'])
}

}


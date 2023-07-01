import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Package } from 'src/app/models/package.model';
import { OrderformService } from 'src/app/services/orderform.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-select-package',
  templateUrl: './select-package.component.html',
  styleUrls: ['./select-package.component.css']
})
export class SelectPackageComponent {

  constructor(
    private toast:NgToastService,
    private productserv:ProductServiceService,
    public orderser:OrderformService,
    private router:Router

    ){}

  public packages:any=[];
  //public selectedPackage:any;

ngOnInit(){
this.productserv.getPackage()
.subscribe(res=>{
  this.packages=res;
});

}


populatePackage(selectedPackage:Package){
this.orderser.orderformobj.packageId=selectedPackage.id
this.orderser.orderformobj.totalCost=selectedPackage.price

}

pageSize: number = 7;
currentPage: number = 1;

get totalPages(): number {
  return Math.ceil(this.packages.length / this.pageSize);
}

get pagedUsers(): any[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  return this.packages.slice(startIndex, endIndex);
}

get pages(): number[] {
  return Array.from({ length: this.totalPages }, (_, index) => index + 1);
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
  this.router.navigate(['/home','selectpackage'])
}


}

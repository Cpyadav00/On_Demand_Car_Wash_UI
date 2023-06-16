import { Component } from '@angular/core';
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


}

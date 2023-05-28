import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Package } from 'src/app/models/package.model';
import { ApiService } from 'src/app/services/api.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-all-package',
  templateUrl: './all-package.component.html',
  styleUrls: ['./all-package.component.css']
})
export class AllPackageComponent implements OnInit {

  constructor(
    private toast:NgToastService,
    private productserv:ProductServiceService){}

  public packages:any=[];
  //public selectedPackage:any;

ngOnInit(){
this.productserv.getPackage()
.subscribe(res=>{
  this.packages=res;
});

}



deletePackage(id:number){
if(confirm("Are you really want to delete this record ?"))
{
  this.productserv.deletePackage(id)
  .subscribe({
    next:(res=>{
      this.toast.success({detail:"SUCCESS",summary:res.message,duration:5000});

      window.location.reload();
    }),
    error:(err=>{
      this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});
    })
  })

}
}

populatePackage(selectedPackage:Package){
this.productserv.product=selectedPackage;
}


}

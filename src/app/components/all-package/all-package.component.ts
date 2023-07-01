import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private productserv:ProductServiceService,
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

pageSize: number = 6;
  currentPage: number = 1;

  get totalPages(): number {
    return Math.ceil(this.packages.length / this.pageSize);
  }

  get pagedPackages(): any[] {
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
    this.router.navigate(['/admin','services'])
  }


}

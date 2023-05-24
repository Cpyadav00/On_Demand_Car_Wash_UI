import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-package',
  templateUrl: './all-package.component.html',
  styleUrls: ['./all-package.component.css']
})
export class AllPackageComponent implements OnInit {

  constructor(private api:ApiService,
    private toast:NgToastService){}

  public packages:any=[];

ngOnInit(){
this.api.getPackage()
.subscribe(res=>{
  this.packages=res;
});

}


deletePackage(id:number){
  this.api.deletePackage(id)
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

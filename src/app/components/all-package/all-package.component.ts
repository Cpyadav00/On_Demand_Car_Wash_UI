import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-package',
  templateUrl: './all-package.component.html',
  styleUrls: ['./all-package.component.css']
})
export class AllPackageComponent implements OnInit {
  constructor(private api:ApiService){}

  public packages:any=[];
  
ngOnInit(){
this.api.getPackage()
.subscribe(res=>{
  this.packages=res;
});

}

}

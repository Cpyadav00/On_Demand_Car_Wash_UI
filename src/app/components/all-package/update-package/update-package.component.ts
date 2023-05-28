import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Package } from 'src/app/models/package.model';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {
 public package!:Package;

  constructor(private route:ActivatedRoute,
    public packserv:ProductServiceService,
    private router:Router,
    private toast:NgToastService
    ){}

  ngOnInit(){

  }

  updateProduct(myForm:NgForm){
    this.packserv.updatePackage().subscribe(data=>{
      console.log("Update Success");
      window.location.reload();
    })

  }


}

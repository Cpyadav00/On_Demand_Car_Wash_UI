import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent {
  public users:any=[];

  constructor(
    private Addserv:AddressService,
    private router:Router,

    ){}

    ngOnInit() {
      this.Addserv.getAllAddressList()
      .subscribe(res=>{
      this.users=res;
      });



    }



   pageSize: number = 11;
   currentPage: number = 1;

   get totalPages(): number {
     return Math.ceil(this.users.length / this.pageSize);
   }

   get pagedUsers(): any[] {
     const startIndex = (this.currentPage - 1) * this.pageSize;
     const endIndex = startIndex + this.pageSize;
     return this.users.slice(startIndex, endIndex);
   }

   get pages(): number[] {
     return Array.from({ length: this.totalPages }, (_, index) => index + 1);
   }

   changePage(page: number): void {
     if (page >= 1 && page <= this.totalPages) {
       this.currentPage = page;
     }
     this.router.navigate(['/admin','addressList'])
   }


}

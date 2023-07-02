import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
  public users:any=[];

  constructor(
    private api:ApiService,
    private router:Router,
    private toast:NgToastService
    ){}

    ngOnInit() {
      this.api.getCustomer()
      .subscribe(res=>{
      this.users=res;
      });



    }


   pageSize: number = 8;
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
     this.router.navigate(['/admin','customerList'])
   }


   deleteUser(id:number){
    if(confirm("Are you really want to delete this record ?"))
  {
    this.api.deleteUser(id)
    .subscribe({
      next:(res=>{
        window.location.reload();
      }),
      error:(err=>{
        this.toast.error({detail:"ERROR",summary:"Something went wrong",duration:5000});
      })
    })
}
}

}

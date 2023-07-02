import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ContactUs } from 'src/app/models/contactUs.model';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us-display-admin',
  templateUrl: './contact-us-display-admin.component.html',
  styleUrls: ['./contact-us-display-admin.component.css']
})
export class ContactUsDisplayAdminComponent {
  constructor(
    private contserv:ContactUsService,
    private toast:NgToastService,
    private router:Router
  ){}

 public users:any=[];

    // Here you can implement your desired logic, such as sending the form data to a backend server

    ngOnInit() {
      this.contserv.getAllContactUs()
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
      this.router.navigate(['/admin','contactus'])
    }

    deleteRequest(id:number){
      if(confirm("Are you really want to delete this record ?"))
    {
      this.contserv.delete(id)
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

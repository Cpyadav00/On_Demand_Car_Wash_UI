import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent {
  public users:any=[];

  constructor(
    private api:SubscriberService,
    private router:Router,
    private toast:NgToastService
    ){}

    ngOnInit() {
      this.api.getAllSubscriber()
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
      this.router.navigate(['/admin','subscriber'])
    }

    deleteSubscriber(id:number){
      if(confirm("Are you really want to delete this record ?"))
    {
      this.api.delete(id)
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

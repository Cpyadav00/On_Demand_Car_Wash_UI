import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  public users:any=[];

constructor(
  private api:ApiService,
  private router:Router
  ){}

  ngOnInit() {
    this.api.getUser()
    .subscribe(res=>{
    this.users=res;
    });
  }


deletingUser(id:number){
  this.api.deleteUser(id)
  .subscribe({
   next:(res=>{

    window.location.reload();
   })
  })
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
   this.router.navigate(['/admin','allUsers'])
 }


}

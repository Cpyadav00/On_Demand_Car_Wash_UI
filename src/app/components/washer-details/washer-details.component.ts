import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-washer-details',
  templateUrl: './washer-details.component.html',
  styleUrls: ['./washer-details.component.css']
})
export class WasherDetailsComponent {
  public users:any=[];

constructor(private api:ApiService,){}

  ngOnInit() {
    this.api.getWasher()
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

}

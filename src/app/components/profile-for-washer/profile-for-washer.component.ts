import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/models/user.model';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-profile-for-washer',
  templateUrl: './profile-for-washer.component.html',
  styleUrls: ['./profile-for-washer.component.css']
})
export class ProfileForWasherComponent {
  constructor(
    private auth:AuthService,
    private toast:NgToastService,
    private userStore:UserStoreService,
    private api:ApiService

  ){
    this.userStore.getId()
    .subscribe(val=>{
      let idFromToken=this.auth.getId();
      this.id=val || idFromToken
    });

  }

  id:any;

  ngOnInit(){

    this.api.getByIdUser(this.id)
    .subscribe(val=>{
     // console.log(val);
      this.userProfile=val;
    })

  }

    editMode: boolean = false;
    userProfile:User=new User();
    cancelEdit(): void {
      this.editMode = false;
    }

    saveProfile(userProfileForm:NgForm){
   if(userProfileForm.valid)
   {
    console.log(userProfileForm.value);
    this.api.updateuser(this.userProfile)
    .subscribe(val=>{
      console.log(val);
      this.toast.success({detail:"SUCCESS",summary:"Updated Successfully",duration:5000});
      this.cancelEdit()
    })

   }
   else
   {
    alert("Not valid")
   }
    }

}

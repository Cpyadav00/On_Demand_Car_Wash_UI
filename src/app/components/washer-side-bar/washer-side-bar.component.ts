import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washer-side-bar',
  templateUrl: './washer-side-bar.component.html',
  styleUrls: ['./washer-side-bar.component.css']
})
export class WasherSideBarComponent {
  constructor(
    private router:Router
  ){}

    scheduled(){
      this.router.navigate(['/washer','scheduled'])
     }

     request(){
      this.router.navigate(['/washer','request'])
     }

     profile(){
      this.router.navigate(['/washer','profile'])
     }
}

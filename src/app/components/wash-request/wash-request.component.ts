import { Component } from '@angular/core';
import { OrderForm } from 'src/app/models/orderForm.model';
import { OrderformService } from 'src/app/services/orderform.service';
import { WashRequestService } from 'src/app/services/wash-request.service';

@Component({
  selector: 'app-wash-request',
  templateUrl: './wash-request.component.html',
  styleUrls: ['./wash-request.component.css']
})
export class WashRequestComponent {
  public order:any=[];
  constructor(
    private orserv:OrderformService,
    private requestserv:WashRequestService
  ){}

  ngOnInit(){
    this.requestserv.getRequest()
    .subscribe(val=>{
      this.order=val
    })
    
  }

  updateData(id:number){

  }

}

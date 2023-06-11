import { Component } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  result:Number=0
  performaddition(tbox1:any,tbox2:any)
  {
    let n1=+tbox1.value
    let n2=+tbox2.value
    this.result=n1+n2
    
  }

}

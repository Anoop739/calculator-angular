import { Component } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {
  result:Number=0

  performsubstaction(tbox1:any,tbox2:any)

  {
    
    this.result=+(tbox1.value)- (tbox2.value)
  
  }

}

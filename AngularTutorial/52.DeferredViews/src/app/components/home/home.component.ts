import { Component } from '@angular/core';
import { Child1Component } from "../child1/child1.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Child1Component],
  template : `
    <p>
      home works!

      <app-child1></app-child1>
    </p>
  `,
 
})
export class HomeComponent {

  constructor(){
    // for(let i  = 0; i < 1000000000; i++) {
    //   console.log(i);
    // }
  }
}

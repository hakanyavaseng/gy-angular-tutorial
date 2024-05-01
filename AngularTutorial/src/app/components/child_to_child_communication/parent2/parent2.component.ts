import { Component } from '@angular/core';

@Component({
  selector: 'app-parent3',
  template: `
    <div style="background-color:chocolate">
        <h3>Parent 2 Component</h3>

        <app-childa2 (data)="childData($event)"></app-childa2>
        <br/>
        <app-childb2 [message]="childa2sMessage"></app-childb2>
    </div>
  
  `,

})
export class Parent2Component {
  childa2sMessage: string;

  childData(message: string) {
    this.childa2sMessage = message;
  }
}

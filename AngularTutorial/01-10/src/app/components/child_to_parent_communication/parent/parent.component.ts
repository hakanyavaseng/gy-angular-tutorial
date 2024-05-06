import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  template: `
    <h3>Parent Component</h3>
    {{name}}
    <app-child2 (dataEvent)="childEvent($event)"></app-child2>
  `,
})
export class ParentComponent {
  name: string;
  childEvent(obj: any) {
    console.log(obj);
    this.name = obj;
  }
}

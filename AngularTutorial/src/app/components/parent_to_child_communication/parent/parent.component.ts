import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent Component</h3>
    <app-child [childData]="data"></app-child>
  `,

})
export class ParentComponent {
  data: string = "Hello! I am from Parent Component."
}

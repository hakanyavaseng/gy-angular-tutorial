import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  template: `
    <h2>Child1Component</h2>
  `,
  providers: [
    { provide: "ExampleProvider", useValue: "Example Provider Value" }
  ]
  
})
export class Child1Component {

  X() {
    console.log("Child1Component.X");
  }

}

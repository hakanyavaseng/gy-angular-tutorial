import { Component } from '@angular/core';
import { ExampleDirective } from '../../directives/example.directive';
import { ExamplePipe } from '../../pipes/example.pipe';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [ExampleDirective, ExamplePipe],
  template : `
    <p>
      child1 works!
    </p>
  `,
 
})
export class Child1Component {

}

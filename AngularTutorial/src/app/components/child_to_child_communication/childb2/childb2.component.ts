import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb2',
  template: `
    <h3>Child B2 Component</h3>
    {{message}}
  `,

})
export class Childb2Component {
  @Input() message: string;
}

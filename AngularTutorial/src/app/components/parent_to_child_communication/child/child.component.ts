import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>

    {{childData | uppercase}}
  `,
})
export class ChildComponent {
  @Input() childData: string;
}

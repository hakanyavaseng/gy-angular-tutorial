import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <p>child works!</p>

    <ng-container *ngTemplateOutlet="childTemplate">
    Can be used to pass content from parent to child when not using ngTemplateOutlet
      <ng-content>
      </ng-content>
    </ng-container>

  `,

})
export class ChildComponent {
  @Input() childTemplate : TemplateRef<HTMLElement>;

}

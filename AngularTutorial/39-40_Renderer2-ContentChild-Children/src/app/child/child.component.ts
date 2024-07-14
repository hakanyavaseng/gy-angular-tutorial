import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <ng-content>

    </ng-content>
    
  `,

})
export class ChildComponent {
  @ContentChild("h2") h2 : ElementRef;

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.h2.nativeElement.style.color = "blue";
  }
}

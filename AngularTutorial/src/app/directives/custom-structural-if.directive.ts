import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomif]'
})
export class CustomStructuralIfDirective {

  constructor( // These two modules makes the directive structural.
    private templateRef: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { 

  }

  @Input() set appCustomif(value : boolean){ // In structural directives, setter property and selector name MUST be same.
    if(value){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralFor]'
})
export class CustomStructuralForDirective {

  constructor(
    private templateRef : TemplateRef<any>,
    private viewContainer : ViewContainerRef
  ) { }

  @Input() set appCustomStructuralFor(value : number){
    for(let i = 0; i< value; i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{
        //index: i
        $implicit: i, // $implicit is a keyword that is used to pass the value to the template
      });
    }
  }
}

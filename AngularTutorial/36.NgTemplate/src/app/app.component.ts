import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>{{title}}</h1> 

  <ng-template #loading>Loading template...</ng-template>
  <!-- 
  <ng-container>Loading container!</ng-container><br>

  <ng-container *ngTemplateOutlet="loading">THIS CONTENT WONT BE SHOWN!!!</ng-container> -->
  `
})
export class AppComponent implements AfterViewInit{

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.ngTemplate);
  }

  @ViewChild("loading", {
    static: false,
    read: TemplateRef
  }) ngTemplate: TemplateRef<any>;
  title = '36.NgTemplate';
}

import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from "./child1/child1.component";
import { ExampleDirective } from './example.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Child1Component, ExampleDirective],
  template: `

  <h1 #h appExample>AppComponent</h1>

  <app-child1></app-child1>

  <div #div></div>
  <div #div></div>
  <div #div></div>
  <div #div></div>

  `
})
export class AppComponent {
  //ViewChild 
  @ViewChild("h") h : ElementRef;
  @ViewChild("h", { read: Element}) h2 : ElementRef;
  @ViewChild("h", {read: ExampleDirective}) h3 : ExampleDirective;

  @ViewChild(Child1Component, {static: true}) child1: Child1Component; 

  //Static parameter of ViewChild
  //By adding static: true, we are telling Angular to resolve the ViewChild before the view is rendered. 

  //Read provider by using ViewChild's read parameter
  @ViewChild(Child1Component, {read: "ExampleProvider", static: true}) child2 : string;

  //ViewChildren
  @ViewChildren("div") divs : QueryList<ElementRef |Child1Component>;



  ngOnInit(): void {
    this.child1.X();
    console.log(this.child2);
    console.log(this.divs); // Can't access divs here because it is not initialized yet
  }

  ngAfterViewInit(): void {
    console.log(this.h);
    console.log(this.child1);
    this.child1.X();
    console.log(this.divs);

  }

}

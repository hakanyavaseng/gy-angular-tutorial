import { Renderer2 } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  template: `
    <h1 #h>{{ title }}</h1>

    <app-child>
      <h2 #h2>Hello from parent!</h2>
    </app-child>

  `,
  
 
})
export class AppComponent {
  title = '39-40_Renderer2-ContentChild-Children';

  //Renderer2
  /*
  constructor(private renderer : Renderer2){}

  @ViewChild("h", {static: true}) h : ElementRef;

  ngOnInit(): void {
    this.renderer.setStyle(this.h.nativeElement, "color", "red");
  }
  */

  // ContentChild and Children





}

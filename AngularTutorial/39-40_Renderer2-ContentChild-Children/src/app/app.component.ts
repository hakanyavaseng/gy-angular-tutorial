import { Renderer2 } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 #h>{{ title }}</h1>

  `,
 
})
export class AppComponent {
  title = '39-40_Renderer2-ContentChild-Children';

  constructor(private renderer : Renderer2){}

  @ViewChild("h", {static: true}) h : ElementRef;

  ngOnInit(): void {
    this.renderer.setStyle(this.h.nativeElement, "color", "red");
  }
}

import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appExample]' // This is the reference to the directive in the HTML file. 
                           // If [] is used, it means that the directive is an attribute directive.
  //selector: '.appExample' // If . is used, it means that the directive is a class directive.
})
export class ExampleDirective implements OnInit{

  constructor(private element : ElementRef) { 
    //$(element.nativeElement).fadeIn(3000).fadeOut().fadeIn(5000); // Using jQuery in Angular and directive to fade in and out the element.
  }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  @Input() color : string;

  @HostListener('click') // This is the event that the directive is listening to.
  onClick(){
    alert("HTML element clicked!")
  }

  @HostBinding('style.color') 
    writingColor : string = "red"; // This is the property that the directive is binding to.

}

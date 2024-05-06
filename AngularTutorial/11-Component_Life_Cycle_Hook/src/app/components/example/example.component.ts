import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy {

  //ngOnChanges is called when an input or output binding value changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
  }

  //ngOnInit is called after the first ngOnChanges when the component is created
  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  //ngDoCheck is called when Angular checks to see if the component's data-bound properties have changed
  //Whenever a component's state changes, ngDoCheck is called.
  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  //ngAfterContentInit is called after Angular projects external content into the component's view
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
  }

  //ngAfterContentChecked is called every time the projected content has been checked, it is called with the same time as ngDoCheck
  //But difference is that ngDoCheck is called every time the component's state changes, whereas ngAfterContentChecked is called every time the projected content has been checked. 
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  //ngAfterViewInit is called after Angular initializes the component's views and child views
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }

  //ngAfterViewChecked is called every time the view has been checked
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  //ngOnDestroy is called when the component is destroyed
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }


  @Input() name: string;
}

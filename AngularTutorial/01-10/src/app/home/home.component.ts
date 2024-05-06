import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template: `<h1>{{ pageName }}</h1>`,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() // Input decorator is used to pass the data from the parent component to the child component.
pageName : string = "";
}


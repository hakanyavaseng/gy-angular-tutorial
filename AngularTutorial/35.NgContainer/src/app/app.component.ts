import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '35.NgContainer';

  products : any = [
    { id : 1, name : "Phone", available: true},
    { id : 2, name : "Laptop", available: false},
    { id : 3, name : "Tablet", available: true},
    { id : 4, name : "Watch", available: false},
    { id : 5, name : "Camera", available: true},
    { id : 6, name : "Headphone", available: true},
    { id : 7, name : "Keyboard", available: false},
    { id : 8, name : "Mouse", available: true},
    { id : 9, name : "Monitor", available: false},
    { id : 10, name : "Speaker", available: true} 
  ]
}

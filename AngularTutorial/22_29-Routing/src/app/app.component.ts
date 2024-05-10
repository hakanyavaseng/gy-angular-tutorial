import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLinkActive="active" routerLink="home">Home</a> | <a routerLinkActive="active" routerLink="about">About</a> | <a routerLinkActive="active" [routerLink] = "['contact','a','b','c']">Contact</a>
  <hr>
  <router-outlet></router-outlet> <!-- This is where the router will display the components -->
  <br>
  <button (click)="navigate()">Navigate</button>
  `,
  styles: [
    ".active{color:red;}"
  ]

})
export class AppComponent {
  navigate() {
    history.pushState({ message: 'Hello' }, "title", '/a/b')
  }

  title = '22_29-Routing';
}

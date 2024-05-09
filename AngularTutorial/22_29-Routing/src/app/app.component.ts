import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLinkActive="active" routerLink="home">Home</a> | <a routerLinkActive="active" routerLink="about">About</a> | <a routerLinkActive="active" [routerLink] = "['contact','a','b','c']">Contact</a>
  <hr>
  <router-outlet></router-outlet> <!-- This is where the router will display the components -->
  `,
  styles: [
    ".active{color:red;}"
  ]
  
})
export class AppComponent {
  title = '22_29-Routing';
}

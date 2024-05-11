import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLinkActive="active" routerLink="home">Home</a> | <a routerLinkActive="active" [queryParams]="{x:3}" queryParamsHandling="merge" routerLink="about">About</a> | <a routerLinkActive="active" [queryParams]="contactQueryString" [routerLink] = "['contact','a','b','c']">Contact</a>
  <hr>
  <a routerLinkActive="active" routerLink="products">Products</a>
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
  contactQueryString : any = {b:4};
  title = '22_29-Routing';
}

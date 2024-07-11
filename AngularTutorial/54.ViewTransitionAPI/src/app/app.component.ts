import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <a routerLink="persons">Persons</a><br>
    <router-outlet></router-outlet>
  `
  
})
export class AppComponent {
  title = '54.ViewTransitionAPI';
}

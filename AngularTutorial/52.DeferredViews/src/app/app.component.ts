import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <h1>
      {{ title }}
    </h1>
    <br>
    <button (click)="this.condition = !this.condition">Toggle</button>
    @defer (when condition) {
      <app-home></app-home>
    }
    @placeholder(minimum 1500ms) {
      <p>Placeholder</p>
    }
    @loading(after 150ms; minimum 1500ms) {
      <p>Loading...</p>
    }
    @error {
      <p>Error</p>
    }
  `,
 

})
export class AppComponent {
 
  condition = false;
  title = '52.DeferredViews';
}

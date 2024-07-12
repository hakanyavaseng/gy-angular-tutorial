import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends BaseComponent {
  constructor() {
    super();
  }
  
  getTitle() {
    console.log(this.title.getTitle());
    return this.title.getTitle();
  }

 


}

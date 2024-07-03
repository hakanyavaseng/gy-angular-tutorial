import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = '50.jQuery';

  onClick() {
    $(".d").fadeOut().fadeIn();
  }

  onClick2(div) {
    $(div).fadeToggle();
  }
}

$(document).ready(() => {

  console.log('jQuery is ready');

});

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>{{title}}</h1>
    
    @if(condition)
      {
        <h2>True</h2>
      }
    @else {
      <h2>False</h2>
    }
    ------------------------------
    @for(number of numbers; track number; let i = $index; let f = $first; let l = $last;) {
      <p>{{number}}</p>
      <p>{{f}}</p>
      <p>{{l}}</p>
    }
    @empty {
          <!--  if numbers is empty -->
      <p>No numbers</p>
    
    }
    ------------------------------
    @switch (numbers.length) {
      @case(1) {
        <p>One</p>
      }
      @case(2) {
        <p>Two</p>
      }
      @default {
        <p>Many</p>
      }
    }
    `
})
export class AppComponent {
  numbers = [1, 2];
  condition: boolean = false;
  title = '51.ControlFlowSyntax';
}

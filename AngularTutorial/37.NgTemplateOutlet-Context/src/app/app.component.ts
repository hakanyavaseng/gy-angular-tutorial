import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgTemplateOutlet, NgFor, ChildComponent],
  template: `

    With Context
    <ng-container [ngTemplateOutlet]="t" [ngTemplateOutletContext]="{data: 123, data2: 456, $implicit : 0}">
      Contanier 
    </ng-container>

    Without Context
    <ng-container *ngTemplateOutlet="t; context: {data:123, data2:456, $implicit : 0}">
      Contanier 
    </ng-container>

    <ng-template #t let-data="data" let-data2>  
      <h1>Template: {{data}} - {{data2}}</h1>
    </ng-template>


    Senior App
    <ng-container *ngTemplateOutlet="t2; context: {$implicit : persons }">

    </ng-container>

    <ng-template #t2 let-persons>
      <ul>
        @for(person of persons; track person) {
          <li>{{person.name}} - {{person.age}}</li>
        }
        
      </ul>
    </ng-template>

    Child Component

    <ng-template #parentNgTemplate>
      <h1>Parent Template</h1>
    </ng-template>
    
    <app-child>
      NgContent content from parent
    </app-child>

  `

})
export class AppComponent {
  persons: any[] = [
    { name: 'Hakan', age: 23 },
    { name: 'Ali', age: 33 },
    { name: 'Veli', age: 43 },
    { name: 'Ayşe', age: 53 }
  ]
  title = '37.NgTemplateOutlet-Context';
}

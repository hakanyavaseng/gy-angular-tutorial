import { Component } from '@angular/core';
import { persons } from '../datas';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: ` 
    @for (person of personData; track $index) {
      <a routerLink="/person-detail/{{person.id}}">{{person.name}}</a>
      <img src="{{person.photo}}" [style]="person.viewTransitionName"><br>
      <router-outlet></router-outlet>
    }
  `

})

export class PersonComponent {

  personData: any[] = persons;

}

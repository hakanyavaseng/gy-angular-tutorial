import { Component, Input } from '@angular/core';
import { persons } from '../datas';

@Component({
  selector: 'app-person-detail',
  standalone: true,
  imports: [],
  template: ` 
    <h1>Person Detail</h1>
    <h2>{{person.name}}</h2>
    <img src="{{person.photo}}"><br>
  `
  
})
export class PersonDetailComponent {

  @Input() id : number = 0;
  person : any;

  ngOnInit(): void {

    this.person = persons.find(p => p.id == this.id);
  }

}

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-read-user',
  template: `	<h1>Read User</h1> 
  <ul>
    <li *ngFor="let name of userService.users">{{name}}</li>
  </ul>
  `

})
export class ReadUserComponent {
  constructor(public userService : UserService){}


}

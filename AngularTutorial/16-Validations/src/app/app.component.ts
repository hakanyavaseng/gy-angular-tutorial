import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from './validators/func';

@Component({
  selector: 'app-root',
  template: `

    <form [formGroup]="frm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="name" placeholder="Name"><br>
      <div *ngIf="!name.valid && (name.dirty || name.touched)">
        {{name.errors |json}}
      </div>
      <input type="text" formControlName="surname" placeholder="Surname"><br>
      <input type="email" formControlName="email" placeholder="Email"><br>
      <div *ngIf="!email.valid && (email.dirty || email.touched)">
        {{email.errors |json}}
      </div>
      <input type="password" formControlName="password" placeholder="Password"><br>
      <input type="password" formControlName="passwordConfirm" placeholder="Password Confirm"><br>
      <div>
        <div *ngIf="!frm.valid && (frm.dirty || frm.touched)">
          {{frm.errors |json}}
        </div> 
      </div>
      <button type="submit">Submit</button>
    </form>
   
  `,
})
export class AppComponent {
  frm: FormGroup;
  /**
   *
   */
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      surname: [""],
      email: ["", [Validators.required, Validators.email]],
      password: [""],
      passwordConfirm: [""],
    }, {validators:[matchPassword()]});
  }

  get name() {
    return this.frm.get('name');
  }

  get email() {
    return this.frm.get('email');
  }

  onSubmit() {
    console.log(this.frm.valid);
  }
}

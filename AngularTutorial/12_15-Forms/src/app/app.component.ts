import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <!-- 
    <h3>Template-driven Form</h3>
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">

      <input type="text" name="name" placeholder="Name"  ngModel> <br>  
      <input type="text" name="surname" placeholder="Surname"  ngModel>  <br> 
      <input type="text" name="email" placeholder="Email" ngModel>   <br>
      <input type="text" name="tel" placeholder="Tel" ngModel> <br>  

      <div ngModelGroup="address"> 
          <input type="text" name="country" placeholder="Country" ngModel> <br>
          <input type="text" name="city" placeholder="City" ngModel> <br>
          <input type="text" name="address" placeholder="Address" ngModel> <br>
      </div>

      <button type="submit">Submit</button>
    </form>
   -->

  <h3>Reactive Form</h3>
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" formControlName="name" placeholder="Name"> <br>
    <input type="text" formControlName="surname" placeholder="Surname"> <br>
    <input type="text" formControlName="email" placeholder="Email"> <br>
    <input type="text" formControlName="tel" placeholder="Tel"> <br>

    <div formGroupName="address">
      <input type="text" formControlName="country" placeholder="Country"> <br>
      <input type="text" formControlName="city" placeholder="City"> <br>
      <input type="text" formControlName="address" placeholder="Address"> <br>
    </div>
    <button type="submit">Submit</button>
  </form>

  <!-- <button (click)="ok()">Ok</button>

  Valid: {{frm.valid}} <br> -->

  <button (click)="markAsTouched()">Mark as Touched</button><br>
  <button (click)="markAsAllTouched()">Mark as All Touched</button><br>
  <button (click)="markAsUntouched()">Mark as Untouched</button><br>
  <button (click)="markAsDirty()">Mark as Dirty</button><br>
  <button (click)="markAsPristine()">Mark as Pristine</button><br>
  <button (click)="disable()">Disable</button><br>
  <button (click)="enable()">Enable</button><br>

  Form Touched: {{frm.touched}} <br>
  "name" Form Control Touched: {{frm.get("name").touched}} <br>
  "country" Form Control Touched: {{frm.get("address").get("country").touched}} <br>
  <hr>
  Form Dirty: {{frm.dirty}} <br>


   
  `,
})
export class AppComponent {
  
  // Reactive Forms
  frm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", Validators.required],
      surname: ["yavas", Validators.required],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      tel: ["", Validators.minLength(10)],
      address: formBuilder.group({
        country: [""],
        city: [""],
        address: [""]
      })
    })

    // Subscribe to the valueChanges event of the form
    /*
    this.frm.valueChanges.subscribe({
      next: data => {
        console.log("Form value has changed. New value: " + JSON.stringify(data));
      }
    })

    this.frm.get("name").valueChanges.subscribe({
      next: data => {
        console.log("Name field value has changed. New value: " + data);
      }
    })*/
  }

  onSubmit() {
    console.log(this.frm.value);
  }

  ok() {
    // onlySelf: true => It does not trigger the valueChanges event so in the form, the value of the input field does not change.
    this.frm.get("name").setValue("Hakan", { onlySelf: true }); 
  }

  //Status Changes Functions
  markAsTouched() {
   this.frm.markAsTouched();
  }

  markAsAllTouched() {
    this.frm.markAllAsTouched();
    //this.frm.get("address").markAllAsTouched();
  }

  markAsUntouched() {
    this.frm.markAsUntouched();
  }

  markAsDirty() {
    this.frm.markAsDirty();
  }

  markAsPristine() {
    this.frm.markAsPristine();
  }

  disable() {
    this.frm.disable();
  }

  enable() {
    this.frm.enable();
  }
  
  //-----------------------------------------------------------------------------------

  /* Template-Driven Forms
  @ViewChild("frm", { static: true }) frm: NgForm

  onSubmit(data: any) {
    console.log(this.frm.value); // Returns the all FormControls in the FormGroup
    // {name: 'Hakan', surname: 'Yavaş', email: 'admin@gmail.com', tel: '543 3054301'}

    console.log(this.frm.valid); // Returns the validation status of the form

    console.log(this.frm.touched); // Returns the touched status of the form

    console.log(this.frm.submitted); // Returns the submitted status of the form

    console.log(data);
    
  }*/



  
}

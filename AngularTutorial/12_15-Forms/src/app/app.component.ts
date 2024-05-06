import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
   <h3>Template-driven Form</h3>
   <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">

      <input type="text" name="name" placeholder="Name"  ngModel> <br>  
      <input type="text" name="surname" placeholder="Surname"  ngModel>  <br> 
      <input type="text" name="email" placeholder="Email" ngModel>   <br>
      <!-- // If tel wouldn't be a ngModel, it wouldn't be included in the form data -->
      <input type="text" name="tel" placeholder="Tel" ngModel> <br>  

      <div ngModelGroup="address"> 
          <input type="text" name="country" placeholder="Country" ngModel> <br>
          <input type="text" name="city" placeholder="City" ngModel> <br>
          <input type="text" name="address" placeholder="Address" ngModel> <br>
      </div>

      <button type="submit">Submit</button>
    </form>
  `,
})
export class AppComponent {

  @ViewChild("frm", { static: true }) frm : NgForm

  onSubmit(data: any) {
    console.log(this.frm.value); // Returns the all FormControls in the FormGroup
    // {name: 'Hakan', surname: 'Yavaş', email: 'admin@gmail.com', tel: '543 3054301'}

    console.log(this.frm.valid); // Returns the validation status of the form
    
    console.log(this.frm.touched); // Returns the touched status of the form

    console.log(this.frm.submitted); // Returns the submitted status of the form

    console.log(data);
  }
}

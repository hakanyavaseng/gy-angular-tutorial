import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';



@NgModule({
  declarations: [
    CustomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomComponent
  ]
})
export class CustomModule { }

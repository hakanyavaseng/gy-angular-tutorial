import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add the FormsModule to the imports array for template-driven forms
    ReactiveFormsModule // Add the ReactiveFormsModule to the imports array for reactive forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

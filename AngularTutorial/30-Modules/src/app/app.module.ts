import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';


@NgModule({
  declarations: [ // Components, Directives, Pipes
    AppComponent
  ],
  imports: [ // Modules
    BrowserModule, // BrowserModule is required for running Angular applications in the browser
    AppRoutingModule,
    CustomModule
  ],
  providers: [], // Services
  bootstrap: [AppComponent] // Root Component
})
export class AppModule { }

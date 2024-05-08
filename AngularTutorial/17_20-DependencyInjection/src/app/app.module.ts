import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './productservice';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService], // Providers are services that are available to all components of the application, to use DI in the application, we need to register the services in the providers array of the module.
  bootstrap: [AppComponent]
})
export class AppModule { }

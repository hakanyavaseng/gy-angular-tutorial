import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { RouterModule } from '@angular/router';
//import { StandaloneComponent } from './components/standalone/standalone.component';

@NgModule({
  declarations: [
    AppComponent,
    //StandaloneComponent  // Can not declare this component in the AppModule because it is standalone 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    StandaloneComponent // Even if a component is standalone, it still needs to be imported in the AppModule because an application can have multiple standalone and non-standalone components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonelService } from './services/personel.service';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ReadUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonelService], // Adding service to dependency injection container
  bootstrap: [AppComponent]
})
export class AppModule { }

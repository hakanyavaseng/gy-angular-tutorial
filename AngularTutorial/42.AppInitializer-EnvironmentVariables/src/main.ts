import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      HttpClientModule
    ]),
    // {provide: APP_INITIALIZER, useFactory: () => {
    //   console.log('APP_INITIALIZER configuration called');
    // }}
    {provide: APP_INITIALIZER, useFactory: (httpClient : HttpClient) => {
      return httpClient.get("./assets/config/appConfig.json")
      .subscribe((data) => {
        console.log(data);
      });
    }, multi:true, deps: [HttpClient]}
  ]
});
 

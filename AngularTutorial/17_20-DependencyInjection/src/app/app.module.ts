import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService, ProductService } from './productservice';
import { productServiceIT } from './injection-token';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // providers: [
  //   ProductService, LoggerService
  // ], // Providers are services that are available to all components of the application, to use DI in the application, we need to register the services in the providers array of the module.
  providers: [
    //{provide: ProductService, useClass: ProductService}, // Type token is used to provide the service, useClass is used to provide the service class.
    //{provide: "ProductService", useClass: ProductService}, // String token
    //{provide: productServiceIT, useClass: ProductService}, // InjectionToken
    //{provide: "example", useValue: "This is an example"}, // useValue is used to provide a value. Generally used for providing configuration values.
    // {provide: "example", useValue: () => {
    //   console.log("This is a function called by the useValue");
    // }},
    {
      provide: "productService", useFactory: (httpClient, loggerService) => {
        const obs =  httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
          console.log(data);
        });
        return new ProductService(loggerService);
      }, deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

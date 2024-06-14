import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { HomeComponent } from './app/home/home.component';
import { ProductComponent } from './app/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, inject } from '@angular/core';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: 'API_ENDPOINT',
      useValue: 'http://api.example.com'
    },
    importProvidersFrom([
      HttpClientModule
    
    ]),
    provideRouter([
      { path: '', component: HomeComponent },
      {path: 'about', component: AboutComponent},
      {
        path: "product/:id", 
        component: ProductComponent,
        data: {
          productName: "Product Name"
        },
        resolve: {
          products: (route: any,state: any) => {
            const httpClient : HttpClient = inject(HttpClient);
            return httpClient.get("https://jsonplaceholder.typicode.com/posts");
          }
        }
      },
    ], withComponentInputBinding())  
  ]
})

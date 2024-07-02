import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomErrorHandler } from './app/custom.error.handler';
import { CustomHttpInterceptor } from './app/custom-http.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true}
  ]
});

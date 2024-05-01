import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ExampleDirective } from './directives/example.directive';
import { CustomStructuralIfDirective } from './directives/custom-structural-if.directive';
import { CustomStructuralForDirective } from './directives/custom-structural-for.directive';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,  // To use any component in the application, we need to declare it in the declarations array of the main module.
    ExampleDirective, CustomStructuralIfDirective, CustomStructuralForDirective, CustomPipe // Same as above, directives are also declared in the declarations array of the main module.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue: '₺'}, CustomPipe], // Pipe is provided in the providers array of the main module. This is done to make the pipe available to all components in the application.
                                                                            //By doing this, we can use the pipe in any component like service,class, etc.
  bootstrap: [AppComponent] // This is the root component of the application that Angular creates and inserts into the index.html host web page.
})
export class AppModule { }

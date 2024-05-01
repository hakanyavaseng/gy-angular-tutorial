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
import { ParentComponent } from './components/parent_to_child_communication/parent/parent.component';
import { ChildComponent } from './components/parent_to_child_communication/child/child.component';
import { ParentComponent as Parent2 } from './components/child_to_parent_communication/parent/parent.component';
import { ChildComponent as Child2 } from './components/child_to_parent_communication/child/child.component';
import { Parent2Component } from './components/child_to_child_communication/parent2/parent2.component';
import { Childa2Component } from './components/child_to_child_communication/childa2/childa2.component';
import { Childb2Component } from './components/child_to_child_communication/childb2/childb2.component';


@NgModule({
  declarations: [
    // To use any component in the application, we need to declare it in the declarations array of the main module.
    AppComponent,
    HomeComponent,  
    ParentComponent, ChildComponent, Parent2, Child2,
    ExampleDirective, CustomStructuralIfDirective, CustomStructuralForDirective, CustomPipe, Parent2Component, Childa2Component, Childb2Component, // Same as above, directives are also declared in the declarations array of the main module.
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

import { Injectable, ViewContainerRef } from '@angular/core';
import { ExampleComponent } from './example/example.component';

@Injectable({
  providedIn: 'root'
})
export class LoadComponentService {

  async loadComponent(viewContainerRef: ViewContainerRef, componentType : any) {
    // return viewContainerRef.createComponent((await import('./example/example.component')).ExampleComponent);
    viewContainerRef.clear();
    return viewContainerRef.createComponent(componentType);
  }
}

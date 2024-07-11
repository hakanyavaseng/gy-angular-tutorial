import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadComponentService } from './load-component.service';
import { ExampleComponent } from './example/example.component';
import { LoadComponentDirective } from './directives/load-component.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadComponentDirective],
  template: `
    <h1>{{ title }}</h1>

    <button (click)="loadComponent()">Load</button>

    <div>
      <ng-template appLoadComponent>

      </ng-template>
    </div>
  `,

})
export class AppComponent {
  title = '53.DynamicComponentLoading';

  loadComponentService : LoadComponentService = inject(LoadComponentService);
  @ViewChild(LoadComponentDirective, {static: true}) loadComponentDirective : LoadComponentDirective;

  constructor(public viewContainerRef : ViewContainerRef){
  }
  
  async loadComponent() {
    this.loadComponentService.loadComponent(this.loadComponentDirective.viewContanierRef, await((await import('./example/example.component')).ExampleComponent));
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <h1>Products</h1>
    <a [routerLink]="['detail',2]">Product Detail 2</a>
    <router-outlet></router-outlet>

  `
})
export class ProductComponent {

}

import { Component } from '@angular/core';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  template: `
  <h3>Dependency Injection</h3>
  `,
})
export class AppComponent {
 
  constructor(private productService : ProductService) {
    console.log(this.productService.getProducts());
  }
}

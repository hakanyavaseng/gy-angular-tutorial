import { Component, Inject } from '@angular/core';
import { ProductService } from './productservice';
import { productServiceIT } from './injection-token';

@Component({
  selector: 'app-root',
  template: `
  <h3>Dependency Injection</h3>
  `,
})
export class AppComponent {
 

  //constructor(@Inject("ProductService") private productService : ProductService) { // Injecting the ProductService using the string token.
   constructor(//@Inject(productServiceIT) private productService : ProductService,// Injecting the ProductService using the InjectionToken.
  //@Inject("example") value: string,
 // @Inject("example") func : any
 @Inject("productService") productService : ProductService
) 

{ 
    // console.log(this.productService.getProducts());
    // console.log(value);
    // console.log(func());
  }
}

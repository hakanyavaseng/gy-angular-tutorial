import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `Product Page`,
  
})
export class ProductComponent {

  //Old way of getting route params
  /*
  constructor(private activatedRoute : ActivatedRoute) {
    activatedRoute.paramMap.subscribe((params) => console.log(params.get("id")));
    activatedRoute.data.subscribe((data) => console.log(data["productName"]));
    activatedRoute.data.subscribe((data) => console.log(data["products"]));
  }
    */

  @Input() id : string;
  @Input() productName : string;
  @Input() products : any;

  ngOnInit() {
    console.log(this.id);
    console.log(this.productName);
    console.log(this.products);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent,
    DetailProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "add", component: AddProductComponent },
      { path: ":id", component: DetailProductComponent },
      { path: "", component: ListProductComponent }
    ])
  ]
})
export class ProductsModule { }

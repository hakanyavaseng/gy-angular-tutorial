import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { DetailProductComponent } from './components/products/detail-product/detail-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { HomeComponent } from './components/home/home.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { DetailCustomerComponent } from './components/customers/detail-customer/detail-customer.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';

const routes: Routes = [
  // Bad loading performance
  /*
  { path: "", component: HomeComponent },
  { path: "products/add", component: AddProductComponent },
  { path: "products/:id", component: DetailProductComponent },
  { path: "products", component: ListProductComponent},
  { path: "customers/add", component: AddCustomerComponent },
  { path: "customers/:id", component: DetailCustomerComponent },
  { path: "customers", component: ListCustomerComponent},
  */
  // Lazy loading
  { path: "", component: HomeComponent },
  { path: "products", loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
  { path: "customers", loadChildren: () => import('./components/customers/customers.module').then(m => m.CustomersModule) },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

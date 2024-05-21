import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DetailCustomerComponent } from './detail-customer/detail-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddCustomerComponent,
    DetailCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "add", component: AddCustomerComponent },
      { path: ":id", component: DetailCustomerComponent },
      { path: "", component: ListCustomerComponent }
    ])
  ]
})
export class CustomersModule { }

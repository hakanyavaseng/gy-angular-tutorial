import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []; // Angular gives a routing module by default to handle the routes

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // useHash is used to add a hash to the URL
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneComponent } from './components/standalone/standalone.component';

const routes: Routes = [
  {path: "", component: StandaloneComponent},
  {path: "standalone2", loadComponent: () => import('./components/standalone2/standalone2.component').then(m => m.Standalone2Component)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

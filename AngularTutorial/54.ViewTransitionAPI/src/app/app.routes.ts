import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "persons",
        loadComponent: async () => (await import('./person/person.component')).PersonComponent
    },
    {
        path : "person-detail/:id",
        loadComponent: async () => (await import('./person-detail/person-detail.component')).PersonDetailComponent
    },
    {
        path : "",
        redirectTo: "/persons",
        pathMatch: "full"
    }

];

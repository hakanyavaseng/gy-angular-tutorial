import { Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { ContactComponent } from "../components/contact/contact.component";
import { AboutComponent } from "../components/about/about.component";
import { ProductComponent } from "../components/product/product.component";
import { ProductDetailComponent } from "../components/product/product-detail/product-detail.component";
import { CountComponent } from "../components/product/product-detail/count/count.component";

export const routes: Routes = [
    {
        path: "", // This is the default route
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "home/:id",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "contact/a/b/c",
        component: ContactComponent,
    },
    {
        path: "products",
        component: ProductComponent,
        children: [
            {
                path: "detail/:id",
                component: ProductDetailComponent,
                children: [
                    {
                        path: "count",
                        component: CountComponent
                    }
                ]
            }
        ]
    },
    {/// !!! WILDCARD ROUTE CAN BE DEFINED AT THE END OF THE ROUTES ARRAY BECAUSE IT WILL BE USED WHEN THE REQUESTED ROUTE IS NOT FOUND, OTHERWISE IT WILL BE USED FOR ALL ROUTES
        path: "**", // This is the wildcard route, it will be used when the requested route is not found
        redirectTo: "error" // This will redirect to the error route, an error page can be shown here
    }
]
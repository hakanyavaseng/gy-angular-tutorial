import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
}) // @Injectable decorator is used to define a service class, it can be injected into any component or other service in the application. 
   // By using this, we do not need to add the service to the providers array of the module.
export class ProductService {
    getProducts(): Product[] {
        return [
            { name: 'Samsung Galaxy S10', quantity: 10 },
            { name: 'iPhone 11', quantity: 20 },
            { name: 'OnePlus 7T', quantity: 30 }
        ];
    }
}
export class Product {
    name : string;
    quantity : number;
}
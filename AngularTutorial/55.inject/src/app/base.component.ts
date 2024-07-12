import { Directive, inject } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";


// @Directive() // It was a way to make a shortcut for component initialization of the base component's concrete classes before inject
export class BaseComponent{
    // constructor(public title : Title, public router: Router, public activatedRoute: ActivatedRoute){ old

    // }
    public title : Title = inject(Title);
    public router: Router = inject(Router);
    public activatedRoute: ActivatedRoute = inject(ActivatedRoute);
   
}

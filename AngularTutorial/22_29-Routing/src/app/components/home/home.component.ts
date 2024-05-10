import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    `
 
})
export class HomeComponent {
  // ActivatedRoute is used to get the current route's information
  /*
  constructor(private activatedRoute : ActivatedRoute){
    var d = this.activatedRoute.snapshot.paramMap.has("id");
    var e = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id",d, e);
  }
  */

  // Using Observable
  constructor(private activatedRoute : ActivatedRoute){
    this.activatedRoute.paramMap.subscribe(params => {
      var d = params.has("id");
      var e = params.get("id");
      console.log("id",d, e);
    });
    
    this.activatedRoute.params.subscribe({
      next: (parameter) => {
       console.log("parameter", parameter);
      }
    })

  }

}

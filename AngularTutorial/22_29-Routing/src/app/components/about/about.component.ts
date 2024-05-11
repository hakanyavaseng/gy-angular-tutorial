import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
    <h1>About</h1>
    `
  
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe({
      next: queryStringParam => {
        console.log(queryStringParam.get('x'));
      }
    })
    
  }

}

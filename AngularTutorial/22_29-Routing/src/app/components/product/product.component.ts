import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
    <h1>Products</h1>
    <a [routerLink]="['detail',2]">Product Detail 2</a>
    <router-outlet></router-outlet>

    <br>
    <ul>
      <li *ngFor="let photo of photos">
      <a [routerLink]="[photo.id]">{{photo.url}}</a>

      </li>
    </ul>
  `
})

export class ProductComponent implements OnInit {
  constructor(private activatedRoute : ActivatedRoute) { }
  photos;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.photos = data["photos"];
    });
  }
  

}


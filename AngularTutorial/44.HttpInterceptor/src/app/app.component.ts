import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private httpClient : HttpClient) {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      console.log(data);
    });
  }

  title = '44.HttpInterceptor';
}

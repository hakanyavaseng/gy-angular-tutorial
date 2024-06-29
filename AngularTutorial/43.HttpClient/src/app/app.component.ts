import { HttpClient, HttpParams } from '@angular/common/http';
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

    var params = new HttpParams()
          .set('id', '1');
    
    // Using subscribe
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts', {
      params: params
    }).subscribe((data) => {
      console.log(data);
    });

    //using next and error callbacks of subscribe method
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: data => console.log(data),
      error: error => console.error(error)
    });

  }

  title = '43.HttpClient';
}

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomStorageService } from './custom-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '49.Storages';

  constructor(private customStorage : CustomStorageService) {

  }

  ngOnInit() {
    // Local Storage => It will stay forever until you remove it or clear the browser cache.
    localStorage.setItem('key', 'value');
    console.log(localStorage.getItem('key'));

    // Session Storage => It will be removed when the browser or tab is closed.
    sessionStorage.setItem('session', 'sessionValue');
    console.log(sessionStorage.getItem('session'));

    // Cache Storage => It is used to store the cache data.
    caches.open('cacheName').then(cache => {
      cache.put("permission", new Response("granted"));
      cache.addAll(['https://jsonplaceholder.typicode.com/todos']);
    });

    //Cookies => It is used to store the data in the browser.
    // ng add ngx-cookie-service => To install the cookie service. Documentation: https://www.npmjs.com/package/ngx-cookie-service    
    // Angular Service and storage => CustomStorageService

    this.customStorage.setData = {key : 'customStorage', value : 'customStorageValue'};
    console.log(this.customStorage.getData.key);

  }
}

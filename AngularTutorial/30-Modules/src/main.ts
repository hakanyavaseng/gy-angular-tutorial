import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule) // This function is used to bootstrap the root module of the application, this could be AppModule or any other module
  .catch(err => console.error(err));

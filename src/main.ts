import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // optional (if you use HttpClient)
import { App} from './app/app';
import { routes } from './app/app.routes';
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient() // optional, safe to include
  ]
}).catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppHome } from './app/home/home.component';

bootstrapApplication(AppHome, appConfig)
  .catch((err) => console.error(err));

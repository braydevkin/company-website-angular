import { bootstrapApplication } from '@angular/platform-browser';
import { AppHome } from './app/home/home.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppHome, config);

export default bootstrap;

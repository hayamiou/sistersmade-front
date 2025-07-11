import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { verifyEnvironment } from './environments/verify-environment';

verifyEnvironment();
bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));

// polyfill
import 'core-js';
import 'reflect-metadata';
import 'web-animations-js';

// dependencies
import 'zone.js';

require('./index.scss');
import 'bootstrap/dist/css/bootstrap.css';

// import 'bootstrap/dist/css/bootstrap-reboot.css';

// app
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

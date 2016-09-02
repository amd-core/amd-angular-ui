// polyfill
require('core-js');
require('reflect-metadata');
require('zone.js');

// app
require('./main.scss');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
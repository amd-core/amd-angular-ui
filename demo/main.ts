// polyfill
import 'core-js';
import 'reflect-metadata';
import 'web-animations-js';

// dependencies
import 'zone.js';

// app
import './index.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

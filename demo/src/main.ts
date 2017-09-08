import './index.scss';

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if (!IS_PRODUCTION) {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

import 'rxjs';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app';

if (IS_PRODUCTION) { enableProdMode(); }

platformBrowserDynamic().bootstrapModule(AppModule);

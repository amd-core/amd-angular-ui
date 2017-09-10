import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';

import * as path from 'path';

import { enableProdMode } from '@angular/core';

import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';

import { RenderingEngine } from './rendering-engine';

import { AppServerModule } from './app-server.module';

enableProdMode();
const Server: express.Express = express();

const BuildRoot: string = path.resolve(__dirname);
const AppBuildRoot: string = path.resolve(BuildRoot, 'public');

Server.engine('html', RenderingEngine({
  bootstrap: AppServerModule
}));

Server.set('views', AppBuildRoot);

Server.use(compression());
Server.use(morgan('combined'));
Server.use(cors());
Server.use(helmet());

Server.get('/public/*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  let fileName: string = req.originalUrl;
  let root: string = fileName.startsWith('/node_modules/') ? '.' : BuildRoot;

  console.log('file request', fileName);

  res.sendFile(fileName, { root }, (err: Error) => {
    if (err) { return next(err); }
  });
});

Server.get('*', (req: express.Request, res: express.Response) => {
  res.render('index.html', { req, res });
});

Server.listen(3200, () => {
  console.log('listening on port 3200...');
});

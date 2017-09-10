import * as fs from 'fs';
import { renderModule } from '@angular/platform-server';
import { Request } from 'express';

const templateCache: any = {};
const outputCache: any = {};

export interface IRenderCallback {
  (err: Error | undefined, html: string): void;
}

export interface IRenderOptions {
  req: Request;
}

export const RenderingEngine: any = (setupOptions: any) => {

  return (filePath: string, options: IRenderOptions, callback: IRenderCallback) => {

    let url: string = options.req.url;
    let html: string = outputCache[url];

    if (html) {
      console.log('from cache: ' + url);
      return callback(undefined, html);
    }

    console.log('building: ' + url);
    if (!templateCache[filePath]) { templateCache[filePath] = fs.readFileSync(filePath).toString(); }

    renderModule(setupOptions.bootstrap, {
      document: templateCache[filePath], url
    }).then((str: string) => {
      console.log('Got output');
      outputCache[url] = str;
      return callback(undefined, str);
    }).catch((err: Error) => {
      console.error('Error', err);
    });
  };
};

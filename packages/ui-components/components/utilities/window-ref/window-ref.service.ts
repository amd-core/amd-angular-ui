import { Injectable } from '@angular/core';

function getWindow(): Window {
  return window;
}

@Injectable()
export class AmdWindowRef {
  get nativeWindow(): Window {
    return getWindow();
  }
}

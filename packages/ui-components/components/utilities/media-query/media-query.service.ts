import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as bowser from 'bowser';

import { AmdWindowRef } from '../window-ref/window-ref.service';
import { AMD_MEDIA_QUERY, IAmdMediaQuery } from './media-query.constant';

@Injectable()
export class AmdMediaQueryService {
  public $mediaQuery: BehaviorSubject<undefined> = new BehaviorSubject(undefined);
  private mediaQueryLists: Map<string, MediaQueryList> = new Map();

  constructor(
    @Inject(AMD_MEDIA_QUERY) private mediaQueries: IAmdMediaQuery,
    private windowRef: AmdWindowRef
  ) {
    if (isPlatformServer(PLATFORM_ID)) { return; }

    for (let mediaQuery in this.mediaQueries) {
      if (this.mediaQueries.hasOwnProperty(mediaQuery)) {
        let mediaQueryList: MediaQueryList = this.windowRef.nativeWindow.matchMedia(this.mediaQueries[mediaQuery]);
        mediaQueryList.addListener(this.onMediaQueryChanged);
        this.mediaQueryLists.set(mediaQuery, mediaQueryList);
      }
    }
  }

  public checkMediaQuery(mediaQuery: string): boolean {
    if (isPlatformServer(PLATFORM_ID)) { return false; }

    let mediaQueryList: MediaQueryList | undefined = this.mediaQueryLists.get(mediaQuery);
    if (!mediaQueryList) { throw new Error('Unsupported media query'); }
    return mediaQueryList.matches;
  }

  public onMediaQueryChanged = () => {
    this.$mediaQuery.next(undefined);
  }

  public checkBrowser(browser: bowser.Flag): boolean {
    if (isPlatformServer(PLATFORM_ID)) { return false; }

    return bowser.test([browser]);
  }

  public isIe(): boolean {
    if (isPlatformServer(PLATFORM_ID)) { return false; }

    return bowser.msie;
  }

  public isEdge(): boolean {
    if (isPlatformServer(PLATFORM_ID)) { return false; }

    return bowser.msedge;
  }
}

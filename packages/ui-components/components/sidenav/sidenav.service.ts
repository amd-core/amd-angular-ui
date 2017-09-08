import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AmdSidenavService {
  public sidenavToggled: Observable<string>;
  public sidenavOpened: Observable<string>;
  public sidenavClosed: Observable<string>;

  private sidenavToggledSource: Subject<string> = new Subject<string>();
  private sidenavOpenedSource: Subject<string> = new Subject<string>();
  private sidenavClosedSource: Subject<string> = new Subject<string>();

  constructor() {
    this.sidenavToggled = this.sidenavToggledSource.asObservable();
    this.sidenavOpened = this.sidenavOpenedSource.asObservable();
    this.sidenavClosed = this.sidenavClosedSource.asObservable();
  }

  public toggle(sidenavId: string): void {
    this.sidenavToggledSource.next(sidenavId);
  }

  public open(sidenavId: string): void {
    this.sidenavOpenedSource.next(sidenavId);
  }

  public close(sidenavId: string): void {
    this.sidenavClosedSource.next(sidenavId);
  }
}

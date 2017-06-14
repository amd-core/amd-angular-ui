import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AmdScrollService {
  public $windowScroll: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'scroll', this.onWindowScroll.bind(this));
  }

  private onWindowScroll(): void {
    this.$windowScroll.next(this.getScrollTop());
  }

  private getScrollTop(): number {
    return this.document.documentElement.scrollTop || this.document.body.scrollTop;
  }  
}

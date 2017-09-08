import { Component, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { AmdScrollService } from '../utilities/amd-scroll/amd-scroll.service';

@Component({
  selector: 'amd-app-container',
  templateUrl: './app-container.component.html'
})
export class AmdAppContainerComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private amdScrollService: AmdScrollService
  ) {
    this.renderer.listen('window', 'scroll', this.onWindowScroll.bind(this));
  }

  private onWindowScroll(): void {
    this.amdScrollService.$windowScroll.next(this.getScrollTop());
  }

  private getScrollTop(): number {
    return this.document.documentElement.scrollTop || this.document.body.scrollTop;
  }
}

import {
  Directive, Inject, ElementRef,
  Input, OnInit, Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { AmdMediaQueryService } from '../utilities/media-query/media-query.service';
import { AmdScrollService } from '../utilities/scroll/scroll.service';

@Directive({
  selector: '[amdParallax]'
})
export class AmdParallaxDirective implements OnInit {
  @Input() private scale: number;
  private isParallaxEnabled: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elementRef: ElementRef,
    private mediaQueryService: AmdMediaQueryService,
    private scrollService: AmdScrollService,
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    this.mediaQueryService.$mediaQuery.subscribe(this.checkDevice.bind(this));
    this.scrollService.$windowScroll.subscribe(this.onScroll.bind(this));

    this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
    this.renderer.setStyle(this.elementRef.nativeElement, 'z-index', '-1');
  }

  private checkDevice(): void {
    this.isParallaxEnabled =
      this.mediaQueryService.checkMediaQuery('gt-sm') &&
      !this.mediaQueryService.isIe() &&
      !this.mediaQueryService.isEdge(); // [TODO] - Fix scrolling on IE and Edge, http://brospars.github.io/snippets/ie-jumpy-bg 
    if (!this.isParallaxEnabled) { this.resetScrollPosition(); }
    else { this.setScrollPosition(this.getScrollTop()); }
  }

  private onScroll(): void {
    if (!this.isParallaxEnabled) { return; }
    this.setScrollPosition(this.getScrollTop());
  }

  private setScrollPosition = (scrollPosition: number) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(0, ${scrollPosition * this.scale}px, 0)`);
  }

  private resetScrollPosition = () => {
    this.setScrollPosition(0);
  }

  private getScrollTop(): number {
    return this.document.documentElement.scrollTop || this.document.body.scrollTop;
  }
}

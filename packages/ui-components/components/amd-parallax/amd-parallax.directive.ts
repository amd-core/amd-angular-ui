import {
  Directive, Inject, ElementRef,
  Input, OnInit, Renderer2
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { AmdMediaQueryService } from '../utilities/amd-media-query/amd-media-query.service';
import { AmdScrollService } from '../utilities/amd-scroll/amd-scroll.service';

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
  }

  private checkDevice (): void {
    this.isParallaxEnabled =
      this.mediaQueryService.checkMediaQuery('gt-sm') &&
      !this.mediaQueryService.isIe() &&
      !this.mediaQueryService.isEdge();
    if (!this.isParallaxEnabled) { this.resetScrollPosition(); }
    else { this.setScrollPosition(this.getScrollTop()); }
  }

  private onScroll (): void {
    if (!this.isParallaxEnabled) { return; }
    this.setScrollPosition(this.getScrollTop());
  }

  private setScrollPosition = (scrollPosition: number) => {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translateY(${scrollPosition * this.scale}px)`);
  }

  private resetScrollPosition = () => {
    this.setScrollPosition(0);
  }

  private getScrollTop(): number {
    return this.document.documentElement.scrollTop || this.document.body.scrollTop;
  }
}

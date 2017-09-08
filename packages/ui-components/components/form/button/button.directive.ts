import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[amdButton]'
})
export class AmdButtonDirective implements OnInit {
  @Input()
  public set color(theme: string) {
    this.renderer.addClass(this.elementRef.nativeElement, `amd-button--${theme}`);
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, `amd-button`);
    this.renderer.addClass(this.elementRef.nativeElement, `amd-button--default`);
  }
}

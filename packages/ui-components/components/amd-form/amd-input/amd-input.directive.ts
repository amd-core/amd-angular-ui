import {
  Directive, HostListener,
  HostBinding, Output,
  EventEmitter, Input
} from '@angular/core';

@Directive({
  selector: '[amdInput]'
})
export class AmdInputDirective {
  @Output()
  public isFocussedChange: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.amd-input')
  public inputClass: boolean = true;

  @HostBinding('class.amd-input--focussed')
  public inputFocussedClass: boolean = false;

  @Input()
  public set isFocussed(isFocussed: boolean) {
    this.setFocus(isFocussed);
  }

  private _isFocussed: boolean = false;

  // constructor(
  //   private changeDetectorRef: ChangeDetectorRef
  // ) { }

  @HostListener('focus')
  public onFocus(): void {
    this.setFocus(true);
  }

  @HostListener('blur')
  public onBlur(): void {
    this.setFocus(false);
  }

  public setFocus(focus: boolean): void {
    this._isFocussed = focus;
    this.inputFocussedClass = focus;
    this.isFocussedChange.emit(focus);
    // this.changeDetectorRef.markForCheck();
  }
}

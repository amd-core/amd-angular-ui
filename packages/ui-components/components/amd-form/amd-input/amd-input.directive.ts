import {
  Directive, HostListener,
  HostBinding, Output, EventEmitter
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

  private _isFocussed: boolean = false;
  
  public get isFocussed(): boolean {
    return this._isFocussed;
  }

  @HostListener('focus')
  public onfocus(): void {
    this.setFocus(true);
  }

  @HostListener('blur')
  public onblur(): void {
    this.setFocus(false);
  }

  private setFocus(focus: boolean): void {
    this._isFocussed = focus;
    this.inputFocussedClass = focus;
    this.isFocussedChange.emit(focus);
  }
}

import {
  Component, ChangeDetectionStrategy,
  ContentChild, AfterContentInit,
  ChangeDetectorRef
} from '@angular/core';

import { AmdInputDirective } from './input.directive';

@Component({
  selector: 'amd-input-container',
  templateUrl: './input-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdInputContainerComponent implements AfterContentInit {
  public set isFocussed(isFocussed: boolean) {
    console.log('Focus');
    this._isFocussed = isFocussed;
    this.changeDetectorRef.markForCheck();
  }

  public get isFocussed(): boolean {
    return this._isFocussed;
  }

  private _isFocussed: boolean = false; 

  @ContentChild(AmdInputDirective) private input: AmdInputDirective;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public focus(): void {
    this.isFocussed = true;
    this.input.setFocus(true);
  }

  public blur(): void {
    this.isFocussed = false;
    this.input.setFocus(false);
  }

  public ngAfterContentInit(): void {
    if (!this.input) {
      throw new Error('amdInput is required as a child of amdInputContainer');
    }

    this.input.isFocussedChange.subscribe((isFocussed: boolean) => this.isFocussed = isFocussed);
  }
}

import {
  Component, ChangeDetectionStrategy,
  ContentChild, AfterContentInit,
  ChangeDetectorRef
} from '@angular/core';

import { AmdInputDirective } from './amd-input.directive';

@Component({
  selector: 'amd-input-container',
  templateUrl: './amd-input-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdInputContainerComponent implements AfterContentInit {
  public isFocussed: boolean = false;

  @ContentChild(AmdInputDirective)
  private input: AmdInputDirective;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  public ngAfterContentInit(): void {
    if (!this.input) {
      throw new Error('amdInput is required as a child of amdInputContainer');
    }

    this.input.isFocussedChange.subscribe((isFocussed: boolean) => {
      this.isFocussed = isFocussed;
      this.changeDetectorRef.markForCheck();
    });
  }
}

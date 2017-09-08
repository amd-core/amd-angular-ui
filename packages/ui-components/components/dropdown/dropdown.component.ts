import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'amd-dropdown',
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdDropdownComponent {
  public set isContentActive(isContentActive: boolean) {
    this._isContentActive = isContentActive;
    this.changeDetectorRef.markForCheck();
  }

  public get isContentActive(): boolean {
    return this._isContentActive;
  }

  private _isContentActive: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  public open(): void {
    this.isContentActive = true;
  }

  public close(): void {
    this.isContentActive = false;
  }

  public toggle(): void {
    this.isContentActive = !this.isContentActive;
  }

  public onTriggerClicked(): void {
    this.toggle();
  }

  public onOverlayClicked(): void {
    this.close();
  }
}

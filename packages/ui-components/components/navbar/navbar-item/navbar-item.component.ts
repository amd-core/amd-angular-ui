import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'amd-navbar-item',
  templateUrl: './navbar-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdNavbarItemComponent {
  @Input() public set theme(theme: string) {
    this.navbarItemThemeClass = `amd-navbar__item--${theme}`;
    this.changeDetectorRef.markForCheck();
  }

  public navbarItemThemeClass: string = 'amd-navbar__item--default';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }
}

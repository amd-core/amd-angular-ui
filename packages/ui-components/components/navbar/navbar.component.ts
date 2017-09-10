import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AmdNavbarItemComponent } from './navbar-item/navbar-item.component';

@Component({
  selector: 'amd-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdNavbarComponent implements AfterContentInit {
  @Input() public set theme(theme: string) {
    this.navbarThemeClass = `amd-navbar--${theme}`;
    this._theme = theme;

    if (this.navbarItems) {
      this.navbarItems.forEach((item: AmdNavbarItemComponent) => item.theme = theme);
    }
    
    this.changeDetectorRef.markForCheck();
  }
  
  public navbarThemeClass: string = 'amd-navbar--default';

  @ContentChildren(AmdNavbarItemComponent) private navbarItems: QueryList<AmdNavbarItemComponent>;
  private _theme: string = 'default';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  public ngAfterContentInit(): void {
    this.navbarItems.forEach((item: AmdNavbarItemComponent) => item.theme = this._theme);
  }
}

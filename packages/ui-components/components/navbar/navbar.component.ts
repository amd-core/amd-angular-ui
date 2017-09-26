import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { AmdNavbarItemComponent } from './navbar-item/navbar-item.component';

@Component({
  selector: 'amd-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmdNavbarComponent implements AfterContentInit {

  public navbarThemeClass: string = 'amd-navbar--default';

  @Input()
  public set theme(theme: string) {
    this.navbarThemeClass = `amd-navbar--${theme}`;
    this._theme = theme;
    this.setThemeOnChildren();
  }

  @ContentChildren(AmdNavbarItemComponent, { descendants: true })
  private set navbarItems(navbarItems: QueryList<AmdNavbarItemComponent>) {
    this._navbarItems = navbarItems;
    this.setThemeOnChildren();
  }

  private _navbarItems: QueryList<AmdNavbarItemComponent>;
  private _theme: string = 'default';

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  public ngAfterContentInit(): void {
    this.setThemeOnChildren();
  }

  private setThemeOnChildren(): void {
    if (this._navbarItems) {
      this._navbarItems.forEach((item: AmdNavbarItemComponent) => {
        item.theme = this._theme;
      });
    }

    this.changeDetectorRef.markForCheck();
  }
}

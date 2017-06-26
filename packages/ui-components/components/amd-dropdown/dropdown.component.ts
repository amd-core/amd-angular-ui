import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'amd-dropdown',
  templateUrl: './dropdown.component.html'
})
export class AmdDropdownComponent {
  @HostBinding() public class: string = 'amd-dropdown';
  public isMenuActive: boolean = false;

  public onToggleClicked(): void {
    this.toggleMenu();
  }

  public onOverlayClicked(): void {
    this.closeMenu();
  }

  public onMenuClicked(): void {
    this.closeMenu();
  }

  private toggleMenu(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  private closeMenu(): void {
    this.isMenuActive = false;
  }
}

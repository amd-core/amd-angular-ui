import { Component } from '@angular/core';

@Component({
  selector: 'amd-dropdown',
  templateUrl: './dropdown.component.html'
})
export class AmdDropdownComponent {
  public isMenuActive: boolean = false;

  public onToggleClicked(): void {
    this.isMenuActive = !this.isMenuActive;
  }

  public onOverlayClicked(): void {
    this.isMenuActive = false;
  }
}

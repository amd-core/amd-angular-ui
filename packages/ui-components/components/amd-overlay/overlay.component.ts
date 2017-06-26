import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amd-overlay',
  templateUrl: './overlay.component.html'
})
export class AmdOverlayComponent {
  @Input() public isActive: boolean = false;
  @Input() public isFixed: boolean = false;
  @Output() public onOverlayClicked: EventEmitter<{}> = new EventEmitter();

  public onClick(): void {
    this.onOverlayClicked.emit();
  }
}

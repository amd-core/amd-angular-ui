import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'amd-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public onPrimaryButtonClicked(): void {
    console.log('Primary button clicked!');
  }

  public onSecondaryButtonClicked(): void {
    console.log('Secondary button clicked!');
  }
}

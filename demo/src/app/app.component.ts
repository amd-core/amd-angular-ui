import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'amd-app',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public onDefaultButtonClicked(): void {
    console.log('Default button clicked!');
  }

  public onPrimaryButtonClicked(): void {
    console.log('Primary button clicked!');
  }

  public onSecondaryButtonClicked(): void {
    console.log('Secondary button clicked!');
  }
}

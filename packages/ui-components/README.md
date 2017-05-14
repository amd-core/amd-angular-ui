# AMD Core Angular UI #

This project is an Angular 2 UI Component Library, and is in very early stages of development!

## Features ##

* Native Angular DOM manipulation
* 100% Angular Universal compatible
* Pure CSS driven animations
* Built to be themeable

## Installation ##

```
$ npm install --save-dev @amd-core/angular-ui
```

## Useage ##

### CSS ###

``` css
@import '~@amd-core/angular-ui/reset-ui-theme.css';
@import '~@amd-core/angular-ui/base-ui-theme.css';
```

### Buttons ###

button-example.module.ts
``` javascript
import { NgModule } from '@angular/core';
import { AmdButtonModule } from '@amd-core/angular-ui';

import { ButtonExampleComponent } from './button-example.component.ts';

@NgModule{(
  imports: [AmdButtonModule],
  declarations: [ButtonExampleComponent]
)}
export class ButtonExampleComponent { }
```

button-example.component.ts
``` javascript
import { Component } from '@angular/core';

@Component({
  selector: 'amd-button-example',
  templateUrl: './button-example.component.html'
})
export class AmdButtonComponent {
  public onPrimaryButtonClicked(): void {
    console.log('Primary button clicked!');
  }

  public onSecondaryButtonClicked(): void {
    console.log('Secondary button clicked!');
  }
}
```

button-example.component.html
``` html
<button amd-button class="button-primary" (click)="onPrimaryButtonClicked()">
  Primary Button
</button>

<button amd-button class="button-secondary" (click)="onSecondaryButtonClicked()">
  Secondary Button
</button>
```

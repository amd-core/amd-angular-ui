# AMD Core - Angular UI #

## Overview ##

This project is an Angular 2 UI Component Library, and is in very early stages of development!

## Features ##

* Native Angular DOM manipulation
* 100% Angular Universal compatible
* Pure CSS driven animations
* Built to be themeable

## Cross Browser Support ##

<a href="https://www.browserstack.com/" target="_blank">
<img src="https://www.browserstack.com/images/layout/browserstack-logo-600x315.png" alt="BrowserStack Logo" width="300">
</a>

[BrowserStack](https://www.browserstack.com/) provides live, web-based browser testing with access all real mobile and desktop browsers. We use BrowserStack to automate running our tests across all modern browsers to ensure consistency in how our components look and behave on different browsers, ensuring that you have a solid foundation on which to build your Angular application.

## Installation ##

``` bash
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

# Contributing #

## Setup ##

### Install NodeJS ####

Installation instructions are available [here](https://nodejs.org).

### Clone the repository locally ###

Note that this project uses a submodule for the demo project to avoid repeating code from the [AMD Angular Seed](https://github.com/amd-core/amd-angular-seed) project. To clone this project and include the submodule, run the following:

``` bash
$ git clone --recursive https://github.com/amd-core/amd-angular-ui.git
```

If you have already cloned the project non-recursively, then run the following in the root of the project:

``` bash
$ git submodule update --init --recursive
```

### Install the project's dependencies ###

The dependencies need to be installed for the both the main project and sub demo project.

``` bash
$ npm install
$ cd demo
$ npm install
```

### Initial project build ###

An initial project build is required to finish setting up the demo project.

``` bash
$ npm run build
```

### Link demo dependency ###

Now the demo's dependency on the main project can be linked to use the project instead of the npm installed version.

First navigate to the built version of the project and create a global npm link.

``` bash
$ cd dist/amd-angular-ui
$ npm link
```

Then navigate to the demo project and link to the new global npm link.

``` bash
$ cd ../../demo
$ npm link @amd-core/angular-ui
```

### Run the demo ###

``` bash
$ npm start
```

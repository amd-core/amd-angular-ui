[![Build Status](https://travis-ci.org/amd-core/amd-angular-ui.svg?branch=master)](https://travis-ci.org/amd-core/amd-angular-ui)
[![Test Coverage](https://codeclimate.com/github/amd-core/amd-angular-ui/badges/coverage.svg)](https://codeclimate.com/github/amd-core/amd-angular-ui)
[![Code Climate](https://codeclimate.com/github/amd-core/amd-angular-ui/badges/gpa.svg)](https://codeclimate.com/github/amd-core/amd-angular-ui)
[![Issue Count](https://codeclimate.com/github/amd-core/amd-angular-ui/badges/issue_count.svg)](https://codeclimate.com/github/amd-core/amd-angular-ui)
[![npm version](https://badge.fury.io/js/%40amd-core%2Fangular-ui.svg)](https://badge.fury.io/js/%40amd-core%2Fangular-ui)

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
$ git clone https://github.com/amd-core/amd-angular-ui.git
```

### Install the project's dependencies ###

The dependencies need to be installed for the both the main project and demo sub project.

``` bash
$ npm install
$ cd demo
$ npm install
```

### Run the demo ###

``` bash
$ cd demo
$ npm start
```

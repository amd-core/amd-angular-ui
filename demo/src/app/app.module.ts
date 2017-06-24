import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmdButtonModule, AmdParallaxModule, AmdAppContainerModule } from '@amd-core/angular-ui';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'amd-angular-seed'
    }),
    AmdButtonModule, AmdParallaxModule, AmdAppContainerModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

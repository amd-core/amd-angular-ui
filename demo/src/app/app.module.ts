import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AmdButtonModule, AmdParallaxModule, AmdAppContainerModule,
  AmdHeroModule, AmdDropdownModule, AmdInputModule, AmdSelectModule,
  AmdInputContainerModule
} from '@amd-core/angular-ui';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'amd-core-angular-ui-demo',
    }),
    AmdButtonModule, AmdParallaxModule,
    AmdAppContainerModule, AmdHeroModule,
    AmdDropdownModule, AmdInputModule,
    AmdSelectModule, AmdInputContainerModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

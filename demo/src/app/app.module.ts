import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  AmdButtonModule, AmdParallaxModule, AmdAppContainerModule,
  AmdHeroModule, AmdDropdownModule, AmdInputModule, AmdSelectModule,
  AmdInputContainerModule, AmdNavbarModule
} from '@amd-core/angular-ui';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'amd-core-angular-ui-demo',
    }),
    FormsModule,
    AmdButtonModule, AmdParallaxModule,
    AmdAppContainerModule, AmdHeroModule,
    AmdDropdownModule, AmdInputModule,
    AmdSelectModule, AmdInputContainerModule,
    AmdNavbarModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

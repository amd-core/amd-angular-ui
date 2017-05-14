import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  AmdFormModule, AmdSidenavModule,
  AmdSidenavService, AmdDialogModule,
  AmdButtonModule, AmdInputModule
} from '@amd-core/angular-ui';

import { AmdAppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    AmdButtonModule, AmdInputModule,
    AmdSidenavModule, AmdDialogModule
  ],
  declarations: [AmdAppComponent],
  bootstrap: [AmdAppComponent],
  providers: [AmdSidenavService]
})
export class AppModule { }

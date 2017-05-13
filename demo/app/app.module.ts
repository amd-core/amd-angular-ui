import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
	AmdFormModule, AmdSidenavModule,
	AmdSidenavService, AmdDialogModule
} from '@amd-core/angular-ui';

import { AmdAppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule, FormsModule,
		AmdFormModule, AmdSidenavModule,
		AmdDialogModule
	],
	declarations: [ AmdAppComponent ],
	bootstrap: [ AmdAppComponent ],
	providers: [ AmdSidenavService ]
})
export class AppModule { }

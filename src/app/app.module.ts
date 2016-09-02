import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AmdFormModule } from '../amd-form';
import { AmdSidenavModule, AmdSidenavService } from '../amd-sidenav';

import { AmdAppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule, FormsModule,
		AmdFormModule, AmdSidenavModule
	],
	declarations: [ AmdAppComponent ],
	bootstrap: [ AmdAppComponent ],
	providers: [ AmdSidenavService ]
})
export class AppModule { }

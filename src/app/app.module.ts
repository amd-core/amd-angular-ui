import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AmdFormModule } from '../amd-form';
import { AmdAppComponent } from './app.component';

@NgModule({
	imports: [ BrowserModule, FormsModule, AmdFormModule ],
	declarations: [ AmdAppComponent ],
	bootstrap: [ AmdAppComponent ]
})
export class AppModule { }

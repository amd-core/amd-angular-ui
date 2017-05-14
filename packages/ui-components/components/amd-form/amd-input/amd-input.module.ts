import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AmdInputComponent } from './amd-input.component';

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AmdInputComponent],
	exports: [AmdInputComponent]
})
export class AmdInputModule { }

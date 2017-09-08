import { NgModule } from '@angular/core';

import { AmdButtonModule } from './button/button.module';
import { AmdInputModule } from './input/input.module';

@NgModule({
	imports: [AmdButtonModule, AmdInputModule],
  exports: [AmdButtonModule, AmdInputModule]
})
export class AmdFormModule { }

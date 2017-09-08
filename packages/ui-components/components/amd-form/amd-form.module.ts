import { NgModule } from '@angular/core';

import { AmdButtonModule } from './amd-button/amd-button.module';
import { AmdInputModule } from './amd-input/amd-input.module';

@NgModule({
	imports: [AmdButtonModule, AmdInputModule],
  exports: [AmdButtonModule, AmdInputModule]
})
export class AmdFormModule { }

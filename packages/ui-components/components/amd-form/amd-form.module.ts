import { NgModule } from '@angular/core';

import { AmdButtonModule } from './amd-button/index';
import { AmdInputModule } from './amd-input/index';

@NgModule({
	imports: [AmdButtonModule, AmdInputModule],
	exports: [AmdButtonModule, AmdInputModule]
})
export class AmdFormModule { }

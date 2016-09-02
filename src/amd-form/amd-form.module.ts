import { NgModule } from '@angular/core';

import { AmdButtonModule } from './amd-button';
import { AmdInputModule } from './amd-input';

@NgModule({
	imports: [ AmdButtonModule, AmdInputModule ],
	exports: [ AmdButtonModule, AmdInputModule ]
})
export class AmdFormModule { }

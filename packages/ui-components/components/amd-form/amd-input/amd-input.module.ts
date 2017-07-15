import { NgModule } from '@angular/core';

import { AmdInputContainerComponent } from './amd-input-container.component';
import { AmdInputDirective } from './amd-input.directive';

@NgModule({
  declarations: [AmdInputDirective, AmdInputContainerComponent],
  exports: [AmdInputDirective, AmdInputContainerComponent]
})
export class AmdInputModule { }

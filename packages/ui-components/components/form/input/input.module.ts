import { NgModule } from '@angular/core';

import { AmdInputContainerComponent } from './input-container.component';
import { AmdInputDirective } from './input.directive';

@NgModule({
  declarations: [AmdInputDirective, AmdInputContainerComponent],
  exports: [AmdInputDirective, AmdInputContainerComponent]
})
export class AmdInputModule { }

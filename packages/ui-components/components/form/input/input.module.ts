import { NgModule } from '@angular/core';

import { AmdInputDirective } from './input.directive';

@NgModule({
  declarations: [AmdInputDirective],
  exports: [AmdInputDirective]
})
export class AmdInputModule { }

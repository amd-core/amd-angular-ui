import { NgModule, Type } from '@angular/core';

import { AmdButtonModule } from './button/button.module';
import { AmdInputModule } from './input/input.module';
import { AmdInputContainerModule } from './input-container/input-container.module';
import { AmdOptionModule } from './option/option.module';
import { AmdSelectModule } from './select/select.module';

const modules: Array<Type<any>> = [
  AmdButtonModule,
  AmdInputModule,
  AmdInputContainerModule,
  AmdOptionModule,
  AmdSelectModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class AmdFormModule { }

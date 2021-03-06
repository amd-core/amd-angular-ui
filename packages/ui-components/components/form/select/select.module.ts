import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdDropdownModule } from '../dropdown/dropdown.module';
import { AmdInputModule } from '../input/input.module';
import { AmdInputContainerModule } from '../input-container/input-container.module';
import { AmdOptionModule } from '../option/option.module';
import { AmdSelectComponent } from './select.component';

@NgModule({
  imports: [
    CommonModule, AmdOptionModule,
    AmdInputModule, AmdDropdownModule,
    AmdInputContainerModule
  ],
  declarations: [AmdSelectComponent],
  exports: [AmdSelectComponent, AmdOptionModule]
})
export class AmdSelectModule { }

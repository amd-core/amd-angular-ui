import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdOverlayModule } from '../amd-overlay';
import { AmdDropdownComponent } from './dropdown.component';

@NgModule({
  imports: [CommonModule, AmdOverlayModule],
  declarations: [AmdDropdownComponent],
  exports: [AmdDropdownComponent]
})
export class AmdDropdownModule { }

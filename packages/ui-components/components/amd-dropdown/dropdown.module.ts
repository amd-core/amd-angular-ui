import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdDropdownComponent } from './dropdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AmdDropdownComponent],
  exports: [AmdDropdownComponent]
})
export class AmdDropdownModule { }

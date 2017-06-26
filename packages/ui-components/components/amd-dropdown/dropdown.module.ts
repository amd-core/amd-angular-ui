import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdOverlayModule } from '../amd-overlay';
import { AmdDropdownComponent } from './dropdown.component';
import { AmdDropdownMenuItemModule } from './amd-dropdown-menu-item';

@NgModule({
  imports: [CommonModule, AmdOverlayModule, AmdDropdownMenuItemModule],
  declarations: [AmdDropdownComponent],
  exports: [AmdDropdownComponent, AmdDropdownMenuItemModule]
})
export class AmdDropdownModule { }

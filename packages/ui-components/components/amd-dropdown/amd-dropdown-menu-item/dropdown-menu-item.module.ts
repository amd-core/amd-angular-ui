import { NgModule } from '@angular/core';

import { AmdDropdownMenuItemDirective } from './dropdown-menu-item.directive';

@NgModule({
  declarations: [AmdDropdownMenuItemDirective],
  exports: [AmdDropdownMenuItemDirective]
})
export class AmdDropdownMenuItemModule { }

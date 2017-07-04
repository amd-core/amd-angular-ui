import { NgModule } from '@angular/core';

import { AmdMenuComponent } from './amd-menu.component';
import { AmdMenuItemComponent } from './amd-menu-item.component';

@NgModule({
  declarations: [AmdMenuComponent, AmdMenuItemComponent],
  exports: [AmdMenuComponent, AmdMenuItemComponent]
})
export class AmdMenuModule { }

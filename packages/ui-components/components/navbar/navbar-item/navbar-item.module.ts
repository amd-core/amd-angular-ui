import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdNavbarItemComponent } from './navbar-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AmdNavbarItemComponent],
  exports: [AmdNavbarItemComponent]
})
export class AmdNavbarItemModule { }

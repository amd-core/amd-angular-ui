import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdNavbarItemModule } from './navbar-item/navbar-item.module';
import { AmdNavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, AmdNavbarItemModule],
  declarations: [AmdNavbarComponent],
  exports: [AmdNavbarComponent, AmdNavbarItemModule]
})
export class AmdNavbarModule { }

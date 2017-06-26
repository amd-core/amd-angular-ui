import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmdOverlayComponent } from './overlay.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AmdOverlayComponent],
  exports: [AmdOverlayComponent]
})
export class AmdOverlayModule { }

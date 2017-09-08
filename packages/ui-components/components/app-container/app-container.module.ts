import { NgModule } from '@angular/core';

import { AmdScrollModule } from '../utilities/amd-scroll/amd-scroll.module';
import { AmdAppContainerComponent } from './app-container.component';

@NgModule({
  imports: [AmdScrollModule],
  declarations: [AmdAppContainerComponent],
  exports: [AmdAppContainerComponent]
})
export class AmdAppContainerModule { }

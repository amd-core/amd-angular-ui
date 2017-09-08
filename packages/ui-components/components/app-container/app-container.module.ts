import { NgModule } from '@angular/core';

import { AmdScrollModule } from '../utilities/scroll/scroll.module';
import { AmdAppContainerComponent } from './app-container.component';

@NgModule({
  imports: [AmdScrollModule],
  declarations: [AmdAppContainerComponent],
  exports: [AmdAppContainerComponent]
})
export class AmdAppContainerModule { }

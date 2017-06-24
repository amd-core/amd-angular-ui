import { NgModule } from '@angular/core';

import { AmdAppContainerComponent } from './amd-app-container.component';

@NgModule({
  declarations: [AmdAppContainerComponent],
  exports: [AmdAppContainerComponent]
})
export class AmdAppContainerModule { }

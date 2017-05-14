import { NgModule } from '@angular/core';

import { AmdButtonDirective } from './amd-button.directive';

@NgModule({
  declarations: [AmdButtonDirective],
  exports: [AmdButtonDirective]
})
export class AmdButtonModule { }

import { NgModule } from '@angular/core';

import { AmdHeroComponent } from './hero.component';

@NgModule({
  declarations: [AmdHeroComponent],
  exports: [AmdHeroComponent]
})
export class AmdHeroModule { }

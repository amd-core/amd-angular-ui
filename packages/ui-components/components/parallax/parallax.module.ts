import { NgModule } from '@angular/core';

import { AmdMediaQueryModule } from '../utilities/amd-media-query/amd-media-query.module';
import { AmdScrollModule } from '../utilities/amd-scroll/amd-scroll.module';

import { AmdParallaxDirective } from './parallax.directive';

@NgModule({
  imports: [AmdMediaQueryModule, AmdScrollModule],
  declarations: [AmdParallaxDirective],
  exports: [AmdParallaxDirective]
})
export class AmdParallaxModule { }

import { NgModule } from '@angular/core';

import { AmdMediaQueryModule } from '../utilities/media-query/media-query.module';
import { AmdScrollModule } from '../utilities/scroll/scroll.module';

import { AmdParallaxDirective } from './parallax.directive';

@NgModule({
  imports: [AmdMediaQueryModule, AmdScrollModule],
  declarations: [AmdParallaxDirective],
  exports: [AmdParallaxDirective]
})
export class AmdParallaxModule { }

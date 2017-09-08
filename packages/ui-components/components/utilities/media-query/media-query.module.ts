import { NgModule } from '@angular/core';
import { AmdWindowRefModule } from '../window-ref/window-ref.module';
import { AmdMediaQuery } from './media-query.constant';
import { AMD_MEDIA_QUERY } from './media-query.token';
import { AmdMediaQueryService } from './media-query.service';

@NgModule({
  imports: [AmdWindowRefModule],
  providers: [
    { provide: AMD_MEDIA_QUERY, useValue: AmdMediaQuery },
    AmdMediaQueryService
  ]
})
export class AmdMediaQueryModule { }

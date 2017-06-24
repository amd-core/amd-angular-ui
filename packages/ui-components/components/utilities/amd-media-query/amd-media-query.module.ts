import { NgModule } from '@angular/core';
import { AmdWindowRefModule } from '../amd-window-ref/amd-window-ref.module';
import { AMD_MEDIA_QUERY, AmdMediaQuery } from './amd-media-query.constant';
import { AmdMediaQueryService } from './amd-media-query.service';

@NgModule({
  imports: [AmdWindowRefModule],
  providers: [
    { provide: AMD_MEDIA_QUERY, useValue: AmdMediaQuery },
    AmdMediaQueryService
  ]
})
export class AmdMediaQueryModule { }

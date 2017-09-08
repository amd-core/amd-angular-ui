import { InjectionToken } from '@angular/core';

import { IAmdMediaQuery } from './media-query.interface';

export const AMD_MEDIA_QUERY: InjectionToken<IAmdMediaQuery> = new InjectionToken('AmdMediaQuery');

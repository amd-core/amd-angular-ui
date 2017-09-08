import { OpaqueToken } from '@angular/core';

export const AMD_MEDIA_QUERY: OpaqueToken = new OpaqueToken('AmdMediaQuery');

export interface IAmdMediaQuery {
  'xs': string;
  'gt-xs': string;
  'sm': string;
  'gt-sm': string;
  'md': string;
  'gt-md': string;
  'lg': string;
  'gt-lg': string;
  'xl': string;
  'landscape': string;
  'portrait': string;
  'print': string;
}

export const AmdMediaQuery: IAmdMediaQuery = {
  'xs': '(max-width: 599px)',
  'gt-xs': '(min-width: 600px)',
  'sm': '(min-width: 600px) and (max-width: 959px)',
  'gt-sm': '(min-width: 960px)',
  'md': '(min-width: 960px) and (max-width: 1279px)',
  'gt-md': '(min-width: 1280px)',
  'lg': '(min-width: 1280px) and (max-width: 1919px)',
  'gt-lg': '(min-width: 1920px)',
  'xl': '(min-width: 1920px)',
  'landscape': '(orientation: landscape)',
  'portrait': '(orientation: portrait)',
  'print': 'print'
};

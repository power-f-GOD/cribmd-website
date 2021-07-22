/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MouseEvent } from 'react';

export const preventDefault =
  <T = HTMLElement>(callback?: () => void) =>
  (e: MouseEvent<T>): void => {
    e.preventDefault();

    if (callback) callback();
  };

export const getMediaLogo = (name: string): string => `/img/logo/media/${name}-logo__250x.webp`;

export const getPLogo = (name: string): string => `/img/logo/media/${name}-logo__250x.webp`;

export class GetLogo {
  static baseUrl = '/img/logo/';

  static media(name: string) {
    return `${this.baseUrl}media/${name}-logo__250x.webp`;
  }

  static partner(name: string) {
    return `${this.baseUrl}partner/${name}-logo__250x.webp`;
  }
}

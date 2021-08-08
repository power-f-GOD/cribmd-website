/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MouseEvent } from 'react';

export const preventDefault =
  <T = HTMLElement>(callback?: () => void) =>
  (e: MouseEvent<T>): void => {
    e.preventDefault();

    if (callback) callback();
  };

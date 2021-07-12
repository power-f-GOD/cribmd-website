import { MouseEvent } from 'react';

export const preventDefault = <T = HTMLElement>(callback?: () => void) => (
  e: MouseEvent<T>
): void => {
  e.preventDefault();

  if (callback) callback();
};

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

export const getHumanName = (text: string, delimiter?: string) => {
  return text
    ? text
        .split(delimiter || '-')
        .map((word) =>
          word.length < 3
            ? `${word[0].toUpperCase() + (word.slice(1) || '')}.`
            : word[0].toUpperCase() + word.slice(1)
        )
        .join(' ')
    : text;
};

export const addEventListenerOnce = (
  target: HTMLElement | any,
  callback: () => void,
  event?: string,
  options?: { capture?: boolean; once?: boolean; passive?: boolean }
) => {
  event = event ? event : 'transitionend';

  try {
    target.addEventListener(
      event,
      callback,
      options
        ? {
            ...(options ?? {}),
            once: options.once !== undefined ? options.once : true
          }
        : { once: true }
    );
  } catch (err) {
    target.removeEventListener(event, callback, options?.capture ? true : false);
    target.addEventListener(event, callback, options?.capture ? true : false);
  }
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MouseEvent } from 'react';
import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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

export const registerScrollAnim = (
  anchor: HTMLElement | null,
  options: {
    selectors: string[];
    windowWidth?: number;
    animClass:
      | ((elementIndex: number, element: HTMLElement, windowWidth?: number) => string)
      | string;
  }
) => {
  const { selectors, animClass } = options;

  setTimeout(() => {
    gsap.registerPlugin(ScrollTrigger);
    (anchor || document).querySelectorAll(`${selectors.join(',')}`).forEach((_element, i) => {
      const element = _element as HTMLElement;

      if (!element.dataset.anim) {
        element.dataset.anim = typeof animClass === 'string' ? animClass : animClass(i, element);
      }

      element.style.animationDelay = `${element.dataset.animdelay || (i * 0.075).toFixed(2)}s`;
      element.style.animationTimingFunction =
        element.dataset.animease || 'cubic-bezier(0.5, 0, .25, 1.5)';
      // const anim = gsap.fromTo(
      //   element,
      //   {
      //     // scrollTrigger: {
      //     //   trigger: element,
      //     //   toggleActions: 'restart none none none',
      //     //   toggleClass: `anim__${
      //     //     typeof animClass === 'string' ? element.dataset.anim : animClass(i, element)
      //     //   }`
      //     // }
      //     y: 100,
      //     opacity: 0
      //   },
      //   {
      //     y: 0,
      //     opacity: 1
      //   }
      // );
      ScrollTrigger.create({
        trigger: element,
        // animation: anim,
        toggleActions: 'restart none none none',
        scrub: 1,
        toggleClass: `anim__${element.dataset.anim}`
        // once: true
      });
    });
  }, 0);
};

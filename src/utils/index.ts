/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MouseEvent } from 'react';

export class GetImage {
  private static baseUrl = '/img/';
  private static logoUrl = GetImage.baseUrl + '_logo/';
  private static homeUrl = GetImage.baseUrl + 'home/';
  private static aboutUrl = GetImage.baseUrl + 'about/our-company';
  private static teamUrl = GetImage.baseUrl + 'about/our-company/team';
  private static otherTeamMembersUrl = GetImage.baseUrl + 'about/our-company/other-team-members';
  private static advisorsUrl = GetImage.baseUrl + 'about/our-company/team';

  private static individualUrl = GetImage.baseUrl + 'health-plans/individual';

  static mediaLogo(name: string) {
    return `${this.logoUrl}media/${name}-logo__250x.webp`;
  }

  static partnerLogo(name: string) {
    return `${this.logoUrl}partners/${name}-logo__250x.webp`;
  }

  static investorLogo(name: string) {
    return `${this.logoUrl}investors/${name}-logo__250x.webp`;
  }

  static cribmdLogo(name: string) {
    return `${this.logoUrl}cribmd/logo-${name}__250x.webp`;
  }

  static home(name: string, size?: '1x' | '2x') {
    return `${this.homeUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static about(name: string, size?: '1x' | '2x') {
    return `${this.aboutUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static team(name: string, size?: '1x' | '2x') {
    return `${this.teamUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static otherTeamMembers(name: string, size?: '1x' | '2x') {
    return `${this.otherTeamMembersUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static advisors(name: string, size?: '1x' | '2x') {
    return `${this.advisorsUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static individual(name: string, size?: '1x' | '2x') {
    return `${this.individualUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static corporate(name: string, size?: '1x' | '2x') {
    return `${this.individualUrl}${name}__${parseInt(String(size || 1)) * 400}x.webp`;
  }
  static testifier(name: string) {
    return `${this.baseUrl}_testifiers/${name}.webp`;
  }
}

export class ScrollReveal {
  private root: HTMLElement | Document;
  private animAnchors: NodeListOf<HTMLElement> | undefined;
  private observer: IntersectionObserver;

  constructor(root: HTMLElement | Document) {
    const { innerWidth: width, innerHeight: height } = globalThis;

    this.root = root;
    this.observer = createObserver(
      null,
      (entries) => {
        entries.forEach((entry) => {
          const animAnchor = entry.target as HTMLElement;
          const isIntersecting = entry.isIntersecting;

          animAnchor.dataset.animate_targets = entry.isIntersecting ? 'true' : 'false';

          if (animAnchor.dataset.anim_once) {
            if (isIntersecting) {
              animAnchor.dataset.animate_targets = 'true';
              this.observer.unobserve(animAnchor);
            }
          }
        });
      },
      { threshold: width < 768 ? (height < width ? 0.25 : 0.5) : 0.4 }
    );
    // throttle for a few millisec to ascertain anchors have mounted in the DOM
    throttle(() => this.register());
  }

  register() {
    this.animAnchors = this.root.querySelectorAll('[data-anim_anchor]');
    this.animAnchors?.forEach((animAnchor) => this.observer.observe(animAnchor));
  }

  unregister() {
    this.animAnchors?.forEach((animAnchor) => this.observer.unobserve(animAnchor));
  }
}

export const preventDefault =
  <T = HTMLElement>(callback?: () => void) =>
  (e: MouseEvent<T>): void => {
    e.preventDefault();

    if (callback) callback();
  };

export const createObserver = (
  root: HTMLElement | null,
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const { rootMargin, threshold } = options || {};

  return new IntersectionObserver(
    callback,
    options
      ? { rootMargin: rootMargin ?? '0px', threshold: threshold ?? 1.0, root }
      : {
          root,
          rootMargin: '0px',
          threshold: Array(101)
            .fill(0)
            .map((_, i) => Number((i / 100).toFixed(2)))
        }
  );
};

export const throttle = (callback: () => void, delay?: number) =>
  setTimeout(() => callback(), delay || 50);

const _requestAnimationFrameWrapper = () => {
  let previousTime = 0;

  if (globalThis.requestAnimationFrame) return globalThis.requestAnimationFrame;
  return (callback: (timeout: number) => void) => {
    /**
     * Credit to Paul Irish (@ www.paulirish.com) for creating/providing this polyfill
     */
    const timestamp = new Date().getTime();
    const timeout = Math.max(0, 16 - (timestamp - previousTime));
    const id = setTimeout(() => {
      callback(timestamp + timeout);
    }, 16); //corrected this line from 'timeout' in actual polyfill to '16' as it made animation slow and jank

    previousTime = timestamp + timeout;

    return id;
  };
};

const _requestAnimationFrame = _requestAnimationFrameWrapper();
// const _cancelAnimationFrame = _cancelAnimationFrameWrapper();

const delay = (timeout: number, clearCallback?: () => void): Promise<number> => {
  if (isNaN(timeout)) {
    throw Error("'delay' expects a time [number] in milliseconds as parameter.");
  }

  return new Promise((resolve: (timeoutId: any) => void) => {
    let start = 0;
    let id = _requestAnimationFrame(animate);
    const clear = clearCallback ? clearCallback() : false;

    function animate(timestamp: number) {
      if (!start) {
        start = timestamp;
      }

      const timeElapsed = timestamp - start;

      if (timeElapsed < timeout && !clear) {
        id = _requestAnimationFrame(animate);
      } else {
        resolve(id);
      }
    }
  });
};

const interval = (
  callback: () => void,
  _interval: number,
  clearCallback?: () => boolean
): Promise<number> => {
  if (isNaN(_interval)) {
    throw Error("'interval' expects a time [number] in milliseconds as parameter.");
  }

  return new Promise((resolve: (id: any) => void) => {
    let start = 0;
    let id = _requestAnimationFrame(animate);
    let clear = false;

    function animate(timestamp: number) {
      if (!start) {
        start = timestamp;
      }

      const timeElapsed = timestamp - start;

      if (!clear) {
        id = _requestAnimationFrame(animate);
      } else {
        resolve(id);
      }

      if (timeElapsed % _interval < 17 && timeElapsed > _interval) {
        callback();
        clear = clearCallback ? clearCallback() : false;
      }
    }
  });
};

// function _cancelAnimationFrameWrapper() {
//   if (globalThis.cancelAnimationFrame) return globalThis.cancelAnimationFrame;
//   return (id: number) => {
//     clearTimeout(id);
//   };
// }

export { delay, interval };

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MouseEvent } from 'react';

export class GetLogo {
  static baseUrl = '/img/logo/';

  static media(name: string) {
    return `${this.baseUrl}media/${name}-logo__250x.webp`;
  }

  static partner(name: string) {
    return `${this.baseUrl}partner/${name}-logo__250x.webp`;
  }
}

export class ScrollReveal {
  private root: HTMLElement | Document;
  private animAnchors: NodeListOf<HTMLElement> | undefined;
  private observer: IntersectionObserver;

  constructor(root: HTMLElement | Document) {
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
      { threshold: globalThis.innerWidth < 768 ? 0.75 : 0.5 }
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

export const throttle = (callback: () => void, delay?: number) => {
  setTimeout(() => callback(), delay || 50);
};

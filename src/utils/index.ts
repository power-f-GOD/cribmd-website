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
          const target = entry.target as HTMLElement;

          target.dataset.animate_targets = entry.isIntersecting ? 'true' : 'false';
        });
      },
      { threshold: 0.7 }
    );
    // delay a few millisec to ascertain anchors have mounted in the DOM
    setTimeout(() => {
      this.animAnchors = this.root.querySelectorAll('[data-anim_anchor]');
      this.register();
    }, 50);
  }

  register() {
    this.animAnchors?.forEach((animAnchor) => {
      animAnchor.querySelectorAll(':scope > [data-anim_target]').forEach((_target, i) => {
        const target = _target as HTMLElement;

        target.classList.add(`anim__${target.dataset.anim || 'fadeInUp'}`);
        target.style.animationDelay = `${target.dataset.anim_delay || (i * 0.1).toFixed(2)}s`;
        target.style.animationTimingFunction =
          target.dataset.anim_ease || 'cubic-bezier(0.5, 0, .25, 1.5)';
      });
      this.observer.observe(animAnchor);
    });
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

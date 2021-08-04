/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { throttle, createObserver } from '.';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

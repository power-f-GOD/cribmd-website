/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createObserver, delay } from '.';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class ScrollReveal {
  private root?: HTMLElement | Document;
  private animAnchors: NodeListOf<HTMLElement> | undefined;
  private observer?: IntersectionObserver;

  constructor(root: HTMLElement | Document, options?: { once: boolean }) {
    const { innerWidth: width } = globalThis;

    // if (width < 768) return;

    this.root = root;

    this.observer = createObserver(
      null,
      (entries) => {
        entries.forEach((entry) => {
          const animAnchor = entry.target as HTMLElement;
          const isIntersecting = entry.isIntersecting;

          animAnchor.dataset.animate_targets = entry.isIntersecting ? 'true' : 'false';

          if (animAnchor.dataset.anim_once || options?.once || width < 768) {
            if (isIntersecting) {
              delete animAnchor.dataset.anim_anchor;
              this.observer?.unobserve(animAnchor);
            }
          }
        });
      },
      { threshold: width < 768 ? 0.5 : 0.25 }
    );
    // throttle for a few millisec to ascertain anchors have mounted in the DOM
    delay(500).then(() => this.register());
  }

  register() {
    this.animAnchors = this.root?.querySelectorAll('[data-anim_anchor]');
    this.animAnchors?.forEach((animAnchor) => this.observer?.observe(animAnchor));
  }

  unregister() {
    this.animAnchors?.forEach((animAnchor) => this.observer?.unobserve(animAnchor));
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createIntersectionObserver } from '.';
import { createMutationObserver } from './observer';

/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class ScrollReveal {
  private root?: HTMLElement | Document;
  private animAnchors: NodeListOf<HTMLElement> | undefined;
  private intersectionObserver?: IntersectionObserver;
  private mutationObserver?: MutationObserver;

  constructor(root: HTMLElement | Document, options?: { once: boolean }) {
    const { innerWidth: width } = globalThis;
    let mutationTimeout: NodeJS.Timeout;

    this.root = root;
    this.intersectionObserver = createIntersectionObserver(
      null,
      (entries) => {
        entries.forEach((entry) => {
          const animAnchor = entry.target as HTMLElement;
          const isIntersecting = entry.isIntersecting;

          animAnchor.dataset.animate_targets = entry.isIntersecting ? 'true' : 'false';

          if (animAnchor.dataset.anim_once || options?.once || width < 768) {
            if (isIntersecting) {
              delete animAnchor.dataset.anim_anchor;
              this.intersectionObserver?.unobserve(animAnchor);
            }
          }
        });
      },
      { threshold: width < 768 ? 0.5 : 0.25 }
    );
    // this block is used to throttle ScrollReveal registration till all children nodes of root have mounted in the DOM
    this.mutationObserver = createMutationObserver(() => {
      clearTimeout(mutationTimeout);
      mutationTimeout = setTimeout(() => {
        this.register();
        this.mutationObserver?.disconnect();
      }, 250);
    });
    this.mutationObserver.observe(this.root, { subtree: true, childList: true });
  }

  register() {
    this.animAnchors = this.root?.querySelectorAll('[data-anim_anchor]');
    this.animAnchors?.forEach((animAnchor) => {
      this.intersectionObserver?.observe(animAnchor);
    });
  }

  unregister() {
    this.animAnchors?.forEach((animAnchor) => this.intersectionObserver?.unobserve(animAnchor));
  }
}

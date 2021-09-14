/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, memo, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { Box } from 'src/components';
import { AppWindowContext } from 'src/pages/_app';

let particlesTimeout: NodeJS.Timeout;
let unmounted = false;

const _Particles = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const [scrollHeight, setScrollHeight] = useState(
    globalThis.document?.documentElement.scrollHeight || 0
  );
  const particles = globalThis.document?.createElement('div');
  const isMobile = windowWidth < 768;

  const handleRenderParticles = useCallback(
    (_, i) => (
      <Box
        as="span"
        className="__particle"
        key={i}
        style={{
          top: `${Math.floor(Math.random() * ((scrollHeight || 6000) * 0.95))}px`,
          left: `${Math.floor(Math.random() * (windowWidth - 20))}px`,
          animationDelay: `${i * 0.15}s`,
          background:
            i % 5 === 0
              ? 'rgba(25, 113, 245, 0.3)' // greyey
              : i % 4 === 0
              ? 'rgb(201, 216, 205, 0.65)' //green
              : i % 3 === 0
              ? 'rgb(212, 209, 219, 0.65)' // purple
              : i % 2
              ? 'rgb(219, 212, 204, 0.6)' // orange
              : 'rgb(101, 189, 225, 0.9)' // blue
        }}
      />
    ),
    [scrollHeight, windowWidth]
  );

  useEffect(() => {
    if (particles) {
      clearTimeout(particlesTimeout);
      particlesTimeout = setTimeout(() => {
        if (!unmounted) {
          setScrollHeight(globalThis.document?.documentElement.scrollHeight);
        }
      }, 1000);
    }
  }, [particles]);

  useEffect(() => {
    if (particles) {
      particles.className = 'Particles';
      globalThis.document?.body.insertAdjacentElement('afterbegin', particles);

      return () => {
        globalThis.document?.body.removeChild(particles);
        unmounted = true;
      };
    }
  }, [particles]);

  useEffect(() => {
    unmounted = false;

    return () => {
      unmounted = true;
    };
  }, []);

  if (!particles || unmounted || typeof window === 'undefined') return <></>;

  return createPortal(
    Array(Math.floor((isMobile ? 4 : 16) * (scrollHeight / (globalThis.innerHeight - 100 || 1000))))
      .fill('')
      .map(handleRenderParticles),
    particles
  );
};

export const Particles = memo(_Particles);

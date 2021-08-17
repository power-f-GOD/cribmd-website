/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, memo, useContext } from 'react';
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

  if (!particles || unmounted) return <></>;

  return createPortal(
    Array(Math.floor(12 * (scrollHeight / (globalThis.innerHeight - 100 || 600))))
      .fill('')
      .map((_, i) => (
        <Box
          className="__particle"
          key={i}
          style={{
            top: `${Math.floor(Math.random() * ((scrollHeight || 6000) * 0.95))}px`,
            left: `${Math.floor(Math.random() * (windowWidth - 20))}px`,
            animationDelay: `${i * 0.2}s`,
            background:
              i % 5 === 0
                ? 'rgba(25, 113, 245, 0.15)'
                : i % 4 === 0
                ? '#dDeCe1'
                : i % 3 === 0
                ? '#e8e5eF'
                : i % 2
                ? '#eFe8e0'
                : '#79d1f5'
          }}
        />
      )),
    particles
  );
};

export const Particles = memo(_Particles);

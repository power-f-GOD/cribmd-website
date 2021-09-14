/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect, useContext } from 'react';
import { ScrollReveal, delay } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main } from 'src/components/pages/about/in-the-news';
import { AppWindowContext } from '../_app';

const InTheNews: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const inTheNewsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const window = globalThis;
    const inTheNews = inTheNewsRef.current;

    delay(500).then(() => {
      const path = window.location.hash;

      if (path && path.includes('#')) {
        const id = path.replace('#', '');
        const element = window.document.querySelector('#' + id);

        if (id && element) {
          const { top } = element?.getBoundingClientRect() || {};
          const offset = (top || 0) - 200;

          try {
            window.scrollTo({
              top: pageYOffset + offset,
              behavior: 'smooth'
            });
          } catch (_) {
            // for Safari users (or other browsers not supporting scrollOptions)
            window.scrollTo(pageYOffset + offset || (0 as any));
          }
        }
      }
    });

    if (inTheNews) {
      const scrollReveal = new ScrollReveal(inTheNews, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AppHead title="About Us - In the News" />

      <Particles />

      <Container as="main" fluid className="InTheNews" ref={inTheNewsRef as any}>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export default InTheNews;

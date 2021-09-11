/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect, useContext } from 'react';
import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/health-plans/individual';
import { ScrollReveal } from 'src/utils';
import { AppWindowContext } from '../_app';

const Individual: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const indvidualRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const individual = indvidualRef.current;

    if (individual) {
      const scrollReveal = new ScrollReveal(individual, { once: true });

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
      <AppHead title="Plans - Individual" />

      <Particles />

      <Container as="main" fluid className="Individual" ref={indvidualRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default Individual;

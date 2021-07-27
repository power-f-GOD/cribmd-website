/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/home';

import { ScrollReveal } from 'src/utils';

const Home: NextPage = () => {
  const homeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const home = homeRef.current;

    if (home) {
      new ScrollReveal(home);
    }
  }, []);

  return (
    <>
      <AppHead title="Telemedicine &amp; Doctor Home Visit" />

      <Container as="main" fluid className="Home" ref={homeRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default Home;

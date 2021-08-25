/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/home/index.module.scss';
import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/home';
import { AppWindowContext } from './_app';

const Home: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const homeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const home = homeRef.current;

    if (home) {
      new ScrollReveal(home, { once: windowWidth < 768 });
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="Telemedicine &amp; Doctor Home Visit" />

      <Container as="main" fluid className={`${S.Home} pt-0 pt-md-1`} ref={homeRef as any}>
        <Particles />
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default Home;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect } from 'react';
import { ScrollReveal } from 'src/utils';
import { Container } from 'react-bootstrap';
import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/health-plans/corporate';

const Corporate: NextPage = () => {
  const corporateRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const corporate = corporateRef.current;

    if (corporate) {
      new ScrollReveal(corporate);
    }
  }, []);
  return (
    <>
      <AppHead title="Plans - Corporate" />

      <Particles />

      <Container as="main" fluid className="Corporate" ref={corporateRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default Corporate;

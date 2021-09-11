/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';

import { Container } from 'react-bootstrap';

import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/faq';
import { ScrollReveal } from 'src/utils';
import { useRef, useEffect, useContext } from 'react';
import { AppWindowContext } from './_app';

const FAQ: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const faqRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const faq = faqRef.current;

    if (faq) {
      const scrollReveal = new ScrollReveal(faq, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container as="main" fluid className="FAQ" ref={faqRef as any}>
      <AppHead title="FAQ" />
      <Particles />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default FAQ;

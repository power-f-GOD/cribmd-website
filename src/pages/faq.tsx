/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';

import { Container } from 'react-bootstrap';

import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/faq';
import { ScrollReveal } from 'src/utils';
import { useRef, useEffect } from 'react';

const FAQ: NextPage = () => {
  const faqRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const faq = faqRef.current;

    if (faq) {
      new ScrollReveal(faq, { once: true });
    }
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

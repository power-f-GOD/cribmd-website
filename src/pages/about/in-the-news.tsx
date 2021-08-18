/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main } from 'src/components/pages/about/in-the-news';

const InTheNews: NextPage = () => {
  const inTheNewsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const inTheNews = inTheNewsRef.current;

    if (inTheNews) {
      new ScrollReveal(inTheNews);
    }
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

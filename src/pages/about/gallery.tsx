/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main } from 'src/components/pages/about/gallery';

const InTheMedia: NextPage = () => {
  const galleryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      new ScrollReveal(gallery);
    }
  }, []);

  return (
    <>
      <AppHead title="About Us - Gallery" />

      <Particles />

      <Container as="main" fluid className="Gallery" ref={galleryRef as any}>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export default InTheMedia;

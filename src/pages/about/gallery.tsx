/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect, useContext } from 'react';
import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main } from 'src/components/pages/about/gallery';
import { AppWindowContext } from '../_app';

const InTheMedia: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const galleryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      new ScrollReveal(gallery, { once: windowWidth < 768 });
    }
  }, [windowWidth]);

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

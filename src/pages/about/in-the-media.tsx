import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect } from 'react';
import { ScrollReveal } from 'src/utils';
import { AppHead } from 'src/components';
import { Header, Main } from 'src/components/pages/about/in-the-media';

const InTheMedia: NextPage = () => {
  const inTheMediaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ourCompany = inTheMediaRef.current;

    if (ourCompany) {
      new ScrollReveal(ourCompany);
    }
  }, []);
  return (
    <>
      <AppHead title="About Us - In the Media" />

      <Container as="main" fluid className="InTheMedia" ref={inTheMediaRef as any}>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export default InTheMedia;

import { NextPage } from 'next';
import { useRef, useEffect } from 'react';
import { ScrollReveal } from 'src/utils';
import { Container } from 'react-bootstrap';
import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/about/our-company';

const OurCompany: NextPage = () => {
  const ourCompanyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ourCompany = ourCompanyRef.current;

    if (ourCompany) {
      new ScrollReveal(ourCompany);
    }
  }, []);
  return (
    <>
      <AppHead title="About Us - Our Company" />

      <Container as="main" fluid className="OurCompany" ref={ourCompanyRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default OurCompany;

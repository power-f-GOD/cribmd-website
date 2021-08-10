import S from 'src/styles/pages/about/our-company/Main.module.scss';
import { useEffect, useRef } from 'react';
import { ScrollReveal } from 'src/utils';
import MainIntro from './Main.Intro';
import { Container } from 'react-bootstrap';
import MainBody from './Main.Body';

const Main = (): JSX.Element => {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const main = mainRef.current;

    if (main) {
      new ScrollReveal(main);
    }
  }, []);

  return (
    <Container as="main" className={S.mainSection} fluid>
      <MainIntro />
      <MainBody />
    </Container>
  );
};

export default Main;

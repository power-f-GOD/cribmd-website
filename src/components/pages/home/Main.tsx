/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';

import { ScrollReveal } from 'src/utils';
import MainIntro from './Main.Intro';
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
    <Container as="main" className="my-5" fluid ref={mainRef}>
      <MainIntro />
      <MainBody />
    </Container>
  );
};

export default Main;

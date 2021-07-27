/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Container } from 'react-bootstrap';

import MainIntro from './Main.Intro';
import MainBody from './Main.Body';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className="my-5" fluid>
      <MainIntro />
      <MainBody />
    </Container>
  );
};

export default Main;

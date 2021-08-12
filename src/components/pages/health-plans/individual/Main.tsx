/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Container } from 'react-bootstrap';
import MainIntro from './Main.Intro';
import MainBody from './Main.Body';
import MainExit from './Main.Exit';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className="my-5 shrink-max-width-xxl" fluid>
      <MainIntro />
      <MainBody />
      <MainExit />
    </Container>
  );
};

export default Main;

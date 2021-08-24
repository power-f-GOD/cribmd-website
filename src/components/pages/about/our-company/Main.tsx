import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/about/our-company/index.module.scss';
import MainIntro from './Main.Intro';
import MainBody from './Main.Body';
import MainExit from './Main.Exit';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className={S.mainSection} fluid>
      <MainIntro />
      <MainBody />
      <MainExit />
    </Container>
  );
};

export default Main;

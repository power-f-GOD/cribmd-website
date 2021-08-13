import { Container } from 'react-bootstrap';

import MainGallery from './Main.Gallery';
import MainInTheNews from './Main.InTheNews';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className="my-5" fluid>
      <MainInTheNews />
      <MainGallery />
    </Container>
  );
};

export default Main;

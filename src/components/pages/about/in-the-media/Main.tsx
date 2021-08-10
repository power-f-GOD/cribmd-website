import { Container } from 'react-bootstrap';
import { Box, RevealOnScroll } from 'src/components/shared';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className="my-5" fluid>
      <RevealOnScroll component={Container}>
        <Box as="h2" className="h4 text-md-center">
          CribMD on the News
        </Box>
      </RevealOnScroll>
      <RevealOnScroll component={Container}>
        <Box as="h2" className="h5 text-md-center">
          Gallery
        </Box>
      </RevealOnScroll>
    </Container>
  );
};

export default Main;

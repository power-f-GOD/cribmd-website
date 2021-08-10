import { Container, Row, Col } from 'react-bootstrap';
import { Box, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/in-the-media/Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <Container fluid as="header">
      <RevealOnScroll once>
        <Box className={`${S.headerContainer} `}>
          <Container className="text-md-center">
            <RevealOnScroll component={Row} className="justify-content-md-center my-5">
              <Col md={10}>
                <RevealOnScroll>
                  <Box as="h1" data-anim_delay="0.3">
                    Inside CribMD
                  </Box>
                </RevealOnScroll>
                <RevealOnScroll className="mx-md-5 px-md-5 my-3">
                  <Box as="p" data-anim_delay="0.6">
                    Catch the latest news about CribMD, see our achievements and see our picture
                    displays
                  </Box>
                </RevealOnScroll>
              </Col>
            </RevealOnScroll>
          </Container>
        </Box>
      </RevealOnScroll>
    </Container>
  );
};

export default Header;

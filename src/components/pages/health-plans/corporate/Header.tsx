import { Col, Container, Row } from 'react-bootstrap';
import { Anchor, Box, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/corporate/Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <Container fluid as="header">
      <RevealOnScroll once>
        <Box className={`${S.headerContainer} `}>
          <Container className="text-md-center">
            <RevealOnScroll component={Row} className="justify-content-md-center my-5">
              <Col md={8}>
                <RevealOnScroll>
                  <Box as="h1" data-anim_delay="0.3">
                    Are you a business? We have the right health plans for you
                  </Box>
                </RevealOnScroll>
                <RevealOnScroll className="mx-md-5 px-md-5 my-3">
                  <Box as="p" data-anim_delay="0.6">
                    Our Individual health plan offers various healthcare coverage options to suit
                    different budgets. You can choose between our basic, premium or family
                    plans--all focused on delivering a remarkable healthcare experience.
                  </Box>
                </RevealOnScroll>
                <RevealOnScroll delay={0.9} className="d-none d-sm-block">
                  <Box data-anim="fadeInDown">
                    <Anchor
                      button
                      variant="contained"
                      color="primary"
                      className="AppNav__nav-link ms-0 ms-lg-2"
                      href="https://www.cribmd.com/signup">
                      Subscribe Now
                    </Anchor>
                  </Box>
                </RevealOnScroll>
                <RevealOnScroll delay={0.9} className="d-block d-sm-none">
                  <Box data-anim="fadeInRight">
                    <Anchor
                      button
                      variant="contained"
                      color="primary"
                      className="AppNav__nav-link ms-0 ms-lg-2"
                      href="https://www.cribmd.com/signup">
                      Get Started
                    </Anchor>
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

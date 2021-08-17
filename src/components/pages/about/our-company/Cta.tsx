import { Box, Img, Anchor, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { Col, Container, Row } from 'react-bootstrap';

const CTA = (): JSX.Element => {
  return (
    <Container as="section" className="mt-md-5">
      <RevealOnScroll once className={S.ctaContainer}>
        <Row className="align-items-center">
          <Col className="px-0 px-md-3" xs={12} md={7}>
            <RevealOnScroll>
              <Box as="h2" data-anim_delay="0.3">
                Are you a doctor interested in joining our network?
              </Box>
            </RevealOnScroll>
            <RevealOnScroll>
              <Box as="p" className="secondary-content pe-md-5 me-md-5" data-anim_delay="0.6">
                From the comfort of your home, provide services to people and help save more lives.
              </Box>
            </RevealOnScroll>
            <RevealOnScroll delay={0.9} className="d-block d-sm-none">
              <Box data-anim="fadeInRight">
                <Anchor
                  button
                  color="primary"
                  className="bg-white col-12 col-md-2"
                  variant="text"
                  href="https://www.cribmd.com/signup">
                  Join Us
                </Anchor>
              </Box>
            </RevealOnScroll>
            <RevealOnScroll delay={0.9} className="d-none d-sm-block">
              <Box data-anim="fadeInRight">
                <Anchor
                  button
                  color="primary"
                  className="bg-white"
                  variant="text"
                  href="https://www.cribmd.com/signup">
                  Join Us
                </Anchor>
              </Box>
            </RevealOnScroll>
          </Col>
          <Col xs={12} md={5}>
            <RevealOnScroll>
              <Img
                srcSet={`/img/about/cta-laptop__500x.png 2x, /img/about/cta-laptop__250x.png 1x`}
                alt="cta image"
                data-anim="fadeIn"
                data-anim_delay="1"
                data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
              />
            </RevealOnScroll>
          </Col>
        </Row>
      </RevealOnScroll>
    </Container>
  );
};

export default CTA;

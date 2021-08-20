// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter
import { Col, Container, Row } from 'react-bootstrap';
import { Box, Img, Anchor, RevealOnScroll, OurInvestors, OurPartners } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import CTA from './CTA';

const Footer = (): JSX.Element => {
  return (
    <Container as="footer" className="mt-5">
      <CTA />
      <OurInvestors />
      <OurPartners />
      <RevealOnScroll>
        <Box className={S.footerContainer}>
          <Row className="align-items-center">
            <Col className="px-0 px-md-3" xs={12} md={7}>
              <RevealOnScroll>
                <Box as="h2" data-anim_delay="0.3">
                  Join our team
                </Box>
              </RevealOnScroll>
              <RevealOnScroll>
                <Box as="p" className="secondary-content pe-md-5 me-md-5" data-anim_delay="0.6">
                  From the comfort of your home, provide services to people and help save more
                  lives.
                </Box>
              </RevealOnScroll>
              <RevealOnScroll delay={0.9}>
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
                  srcSet={`/img/about/team__500x.png 2x, /img/about/team__250x.png 1x`}
                  alt="cta image"
                  data-anim="fadeIn"
                  data-anim_delay="1"
                  data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
                />
              </RevealOnScroll>
            </Col>
          </Row>
        </Box>
      </RevealOnScroll>
    </Container>
  );
};

export default Footer;

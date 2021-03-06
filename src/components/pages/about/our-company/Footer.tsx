// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter
import { Col, Container } from 'react-bootstrap';
import {
  Box,
  Img,
  Anchor,
  RevealOnScroll,
  OurInvestors,
  OurPartners,
  LazyBox
} from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import CTA from './CTA';
import { GetImage } from 'src/utils';

const Footer = (): JSX.Element => {
  return (
    <Container as="footer" fluid className="mt-5 px-md-0 shrink-max-width-xxl">
      <CTA />
      <OurInvestors />
      <OurPartners />

      <LazyBox
        as="section"
        className={`${S.footerBase} align-items-center p-3  px-sm-4 px-md-5 py-md-5 mx-auto container row`}>
        <RevealOnScroll component={Col} className="" xs={12} md={7} allowOverflow>
          <Box as="h2">Join our team</Box>

          <Box as="p" className="secondary-content pe-md-5 me-md-5">
            From the comfort of your home, provide services to people and help save more lives.
          </Box>

          <Box data-anim="fadeInRight">
            <Anchor
              button
              color="tertiary"
              className="bg-white mb-3 mt-2"
              variant="text"
              href="https://app.cribmd.com/signup">
              Join Us
            </Anchor>
          </Box>
        </RevealOnScroll>

        <Col xs={12} md={5}>
          <RevealOnScroll>
            <Img
              src={GetImage.ourCompany('team')}
              width="400"
              height="300"
              alt="cta image"
              data-anim="fadeIn"
              data-anim_delay="1"
              data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
            />
          </RevealOnScroll>
        </Col>
      </LazyBox>
    </Container>
  );
};

export default Footer;

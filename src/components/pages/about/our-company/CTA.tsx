import { Box, Img, Anchor, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { Col, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { AppWindowContext } from 'src/pages/_app';

const CTA = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <Row
      as="section"
      className={`${S.ctaContainer} align-items-center  px-md-4 py-md-5 mt-md-5 mx-auto container`}>
      <RevealOnScroll component={Col} className="px-0 px-md-3" xs={12} md={7} allowOverflow>
        <Box as="h2" data-anim_delay="0.3">
          Are you a doctor interested in joining our network?
        </Box>

        <Box as="p" className="secondary-content pe-md-5 me-md-5" data-anim_delay="0.6">
          From the comfort of your home, provide services to people and help save more lives.
        </Box>

        <Box>
          <Anchor
            button
            color="tertiary"
            className={`bg-white col-12 col-md-2 ${windowWidth < 768 ? 'w-100' : ''}`}
            variant="text"
            href="https://app.cribmd.com/signup">
            Join Us
          </Anchor>
        </Box>
      </RevealOnScroll>

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
  );
};

export default CTA;

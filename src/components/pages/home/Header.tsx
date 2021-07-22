/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Box, Anchor, Img, RevealOnScroll } from 'src/components/shared';
import { SVGEllipse } from 'src/components/shared/SVG';
import { GetLogo, ScrollReveal } from 'src/utils';
import S from 'src/styles/pages/home/Header.module.scss';

const Header = (): JSX.Element => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;

    if (header) {
      new ScrollReveal(header);
    }
  }, []);

  return (
    <Container as="header" ref={headerRef as any}>
      <Row as="section" className={`${S.hero} p-sm-5 align-items-center`}>
        <SVGEllipse type="1" />
        <SVGEllipse type="2" />
        <SVGEllipse type="3" />
        <SVGEllipse type="4" />
        <SVGEllipse type="5" />

        <Col
          xs={12}
          md={8}
          lg={7}
          xl={6}
          className="ps-lg-4 ps-xl-5 pe-md-4 pe-lg-0  overflow-clip">
          <RevealOnScroll className="pt-3 pb-2">
            <Box as="h1" data-anim_delay="0">
              The digital health consultation platform just for you
            </Box>
          </RevealOnScroll>
          <RevealOnScroll className="mb-4 mb-lg-3">
            <Box as="p" data-anim_delay="0.45">
              Skip the waiting room and instantly connect with verified medical practitioners for
              quality healthcare 24/7.
            </Box>
          </RevealOnScroll>
          <RevealOnScroll allowOverflow className="d-flex justify-content-between py-4" delay={0.9}>
            <Anchor
              button
              color="primary"
              variant="text"
              href="https://www.cribmd.com/signup"
              data-anim="fadeInRight">
              Get Started
            </Anchor>
            <Box data-anim="fadeInLeft">
              <Box as="small" className="d-block">
                POWERED BY
              </Box>
              <Box as="h6" className="my-1">
                TheGuardian
              </Box>
            </Box>
          </RevealOnScroll>
        </Col>
        <RevealOnScroll
          component={Col}
          xs={12}
          md={4}
          lg={5}
          xl={6}
          className="px-sm-3 ps-xl-5 pe-xl-0 text-center">
          <Img
            src="/img/home/header-hero-image.png"
            className={`${S.heroImage} ms-lg-4 ms-xl-5`}
            data-anim="fadeIn"
            data-anim_delay="0.85"
            data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
          />
        </RevealOnScroll>
      </Row>
      <RevealOnScroll>
        <Box as="h2" className="mt-5 mb-4 pt-2 pt-md-4 text-md-center">
          CribMD in the Media
        </Box>
      </RevealOnScroll>
      <RevealOnScroll component={Row} as="section" className={`${S.mediaGrid} align-items-stretch`}>
        <Col className="py-2 py-lg-4" xs={3}>
          <Img src={GetLogo.media('techpoint')} alt="Techpoint logo" />
        </Col>
        <Col className="py-2 py-lg-4" xs={3}>
          <Img src={GetLogo.media('spotify')} alt="Techpoint logo" />
        </Col>
        <Col className="py-2 py-lg-4" xs={3}>
          <Img src={GetLogo.media('markets-insider')} alt="Techpoint logo" />
        </Col>
        <Col className="py-2 py-lg-4" xs={3}>
          <Img src={GetLogo.media('yahoo-finance')} alt="Techpoint logo" />
        </Col>
      </RevealOnScroll>
    </Container>
  );
};

export default Header;

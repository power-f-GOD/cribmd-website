/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useMemo, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Box, Anchor, Img, RevealOnScroll } from 'src/components/shared';
import { GetImage } from 'src/utils';
import S from 'src/styles/pages/home/Header.module.scss';
import { AppWindowContext } from 'src/pages/_app';

const Header = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <Container as="header" className="px-md-0">
      <RevealOnScroll once allowOverflow>
        <Row
          as="section"
          className={`${S.hero} p-sm-5 align-items-center`}
          data-anim_delay="0.2"
          data-anim="fadeInUp">
          <Col
            xs={12}
            md={8}
            lg={7}
            xl={6}
            className="ps-lg-4 ps-xl-5 pe-md-4 pe-lg-0  overflow-clip">
            <RevealOnScroll className="pt-md-3" easing="ease">
              <Box as="h1" data-anim_delay="0.125">
                The digital health consultation platform just for you
              </Box>
            </RevealOnScroll>
            <RevealOnScroll className="mb-4 mb-lg-3">
              <Box as="p" data-anim_delay="0.4">
                Skip the waiting room and instantly connect with verified medical practitioners for
                quality healthcare 24/7.
              </Box>
            </RevealOnScroll>
            <RevealOnScroll allowOverflow className="d-flex justify-content-between py-4" delay={1}>
              <Box data-anim="fadeInRight">
                <Anchor button color="primary" variant="text" href="https://app.cribmd.com/signup">
                  Get Started
                </Anchor>
              </Box>

              <Box data-anim="fadeInLeft">
                <Box as="small" className="d-block">
                  POWERED BY
                </Box>
                <Img
                  width="125"
                  src={GetImage.investorLogo('the-guardian')}
                  alt="the guardian logo"
                />
              </Box>
            </RevealOnScroll>
          </Col>

          <RevealOnScroll
            component={Col}
            xs={12}
            md={4}
            lg={5}
            xl={6}
            className="pe-xl-0 text-center">
            <Img
              srcSet={`${GetImage.home('header-hero-image')} 500w, ${GetImage.home(
                'header-hero-image',
                '2x'
              )} 1000w`}
              sizes="(max-width: 1399px) 500px, 1000px"
              className={`${S.heroImage} ms-lg-4 ms-xl-5`}
              data-anim="fadeIn"
              data-anim_delay="0.9"
              data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
            />
          </RevealOnScroll>

          <Box className={S.after}>
            <Box className={S.blurredEllipse} />
            <Box className={S.blurredEllipse} />
          </Box>
        </Row>
      </RevealOnScroll>
      <RevealOnScroll>
        <Box as="h2" className="mt-5 mb-4 pt-2 pt-md-4 text-md-center">
          CribMD in the Media
        </Box>
      </RevealOnScroll>
      <Box as="section">
        <RevealOnScroll
          as="section"
          className={`${S.mediaGrid} align-items-stretch`}
          animName={windowWidth < 992 ? 'fadeInDown' : 'fadeInRight'}
          easing="ease">
          {useMemo(
            () => [
              'the-guardian',
              'techpoint',
              'spotify',
              'markets-insider',
              'yahoo-finance',
              'hollywoodheavy'
            ],
            []
          ).map(
            useCallback(
              (medium) => (
                <Anchor
                  routeLink
                  href="/about/in-the-news#articles"
                  className="p-3 p-lg-4"
                  key={medium}>
                  <Img src={GetImage.mediaLogo(medium)} alt={`${medium} logo`} />
                </Anchor>
              ),
              []
            )
          )}
        </RevealOnScroll>
      </Box>
    </Container>
  );
};

export default Header;

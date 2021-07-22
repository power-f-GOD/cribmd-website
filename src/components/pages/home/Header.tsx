import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Box, Anchor, Img } from 'src/components/shared';
import { SVGEllipse } from 'src/components/shared/SVG';
import { GetLogo } from 'src/utils';
import S from 'src/styles/pages/index/Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <Container as="header">
      <Row as="section" className={`${S.hero} p-sm-5 align-items-center anim__fadeInRightBig`}>
        <SVGEllipse type="1" />
        <SVGEllipse type="2" />
        <SVGEllipse type="3" />
        <SVGEllipse type="4" />
        <SVGEllipse type="5" />

        <Col xs={12} md={8} lg={7} className="pe-md-4 ps-lg-4 pe-lg-5">
          <Box as="h1">The digital health consultation platform just for you</Box>
          <Box as="p" className="mb-4">
            Skip the waiting room and instantly connect with verified medical practitioners for
            quality healthcare 24/7.
          </Box>
          <Box className="d-flex justify-content-between">
            <Anchor button color="primary" variant="text" href="https://www.cribmd.com/signup">
              Get Started
            </Anchor>
            <Box>
              <Box as="small" className="d-block">
                POWERED BY
              </Box>
              <Box as="h6" className="my-1">
                TheGuardian
              </Box>
            </Box>
          </Box>
        </Col>
        <Col xs={12} md={4} lg={5} className="ps-sm-4">
          <Img src="/img/home/header-hero-image.png" className={S.heroImage} />
        </Col>
      </Row>
      <Box as="h2" className="mt-5 h3 mb-4 pt-2 pt-md-4 text-md-center">
        CribMD in the Media
      </Box>
      <Row as="section" className={`${S.mediaGrid} align-items-stretch`}>
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
      </Row>
    </Container>
  );
};

export default Header;

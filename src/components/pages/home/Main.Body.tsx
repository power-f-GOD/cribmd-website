/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, RevealOnScroll, Img } from 'src/components/shared';
import { AppWindowContext } from 'src/pages/_app';
import { GetImage } from 'src/utils';
import MainBodyCarousel from './Main.Body.Carousel';

const MainBody = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isMobile = windowWidth < 768;

  return (
    <Container fluid className={`${S.servicesWrapper} text-left text-md-center`}>
      <RevealOnScroll>
        <Container as="h2" className="pt-4 mb-3">
          Our Services
        </Container>
      </RevealOnScroll>
      <RevealOnScroll component={Container} className="px-0 px-lg-5 reset-max-width-xl">
        <Box as="p" className="px-0 px-md-4 px-lg-5">
          Getting treatment and medical assistance with Telemedicine and Doctor Home Visit has never
          been so fast and seamless. At CribMD, we use cutting-edge technology to offer low-cost
          healthcare plans that enable you and your family access to comprehensive and convenient
          healthcare services.
        </Box>
      </RevealOnScroll>

      <Container className="shrink-max-width-xxl px-lg-5">
        <Row className="">
          <Col className="d-flex flex-column px-0 ps-0 ps-lg-5 text-start mt-0 mt-md-5">
            <MainBodyCarousel />
          </Col>
          {!isMobile && (
            <Col className="d-none d-md-flex align-items-center justify-content-end mt-md-5 ps-4">
              <RevealOnScroll allowOverflow>
                <Img width="400" height="570" src={GetImage.home('phone-with-doctors-list')} />
              </RevealOnScroll>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default memo(MainBody);

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, SVGIcon, RevealOnScroll, Img } from 'src/components/shared';
import { AnimName } from 'src/types';
import { ourServices } from './data';

const MainBody = (): JSX.Element => {
  return (
    <Container fluid className={`${S.servicesWrapper} text-left text-md-center`}>
      {/* Our Services */}
      <RevealOnScroll className="pt-2">
        <Container as="h2">Our Services</Container>
      </RevealOnScroll>
      <RevealOnScroll component={Container} className="px-0 px-lg-5 reset-max-width-xl">
        <Box as="p" className="px-0 px-md-4 px-lg-5">
          Getting treatment and medical assistance with Telemedicine and Doctor Home Visit has never
          been so fast and seamless. At CribMD, we use cutting-edge technology to offer low-cost
          healthcare plans that enable you and your family access to comprehensive and convenient
          healthcare services.
        </Box>
      </RevealOnScroll>

      <Container className="shrink-max-width-xxl">
        <Row>
          <Col className="d-flex flex-column px-0 ps-0 ps-lg-5 text-start mt-0 mt-md-5">
            {ourServices.map((service, i) => (
              <RevealOnScroll
                key={service.name}
                className={`mt-4 d-flex justify-content-${
                  i % 2 === 1 ? 'end' : 'start'
                } justify-content-md-start`}
                allowOverflow>
                <Box
                  className={`${S.serviceCard}`}
                  data-anim={`fadeIn${i % 2 === 0 ? 'Right' : 'Left'}` as AnimName}
                  data-anim_easing="ease">
                  <Box>
                    <SVGIcon name={service.icon} size="medium" />
                    <Box as="h3" className="h4">
                      {service.name}
                    </Box>
                  </Box>
                  <Box as="p">{service.description}</Box>
                </Box>
              </RevealOnScroll>
            ))}
          </Col>
          <Col className="d-none d-md-flex align-items-center justify-content-end">
            <RevealOnScroll allowOverflow>
              <Img src="/img/home/phone-with-doctors-list.webp" />
            </RevealOnScroll>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default memo(MainBody);

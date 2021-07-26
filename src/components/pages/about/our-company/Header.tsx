import { Box, RevealOnScroll } from 'src/components/shared';
import { useEffect, useRef } from 'react';
import { ScrollReveal } from 'src/utils';

import S from 'src/styles/pages/about/our-company/Header.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

const Header = (): JSX.Element => {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      new ScrollReveal(header);
    }
  }, []);

  return (
    <Container
      as="header"
      fluid
      className={`${S.headerSection} text-left text-md-center`}
      ref={headerRef}>
      <RevealOnScroll className="container">
        <Row className="justify-content-md-center py-3">
          <Col xs={12} lg={8}>
            <RevealOnScroll>
              <Box as="h1" className="mt-3" data-anim_delay="0.3">
                Technology for health care
              </Box>
            </RevealOnScroll>
            <RevealOnScroll>
              <Box as="p" className="primary-content px-md-5 mx-md-4" data-anim_delay="0.6">
                We combine modern health strategies and technological expertise to create digital
                experiences that addresses the challenges of accessing medical health.
              </Box>
              <Box className="primary-content px-md-5 mx-md-5" data-anim_delay="0.9">
                We do this by offering low cost medical services from online to door-step outreach.
              </Box>
            </RevealOnScroll>
          </Col>
        </Row>

        {/* user statistics start here */}
        <RevealOnScroll
          component={Row}
          className="justify-content-center my-5"
          data-anim_delay="0.9">
          <Col className="my-3 px-3" xs={6} md={3} data-anim_delay="0.1">
            <Box as="h2">$5K+</Box>
            <Box as="h6">Certified Doctors</Box>
            <Box className="tertiary-content">
              and Health Practitioners across all medical fields
            </Box>
          </Col>
          <Col className="my-3 px-3" xs={6} md={3} data-anim_delay="0.2">
            <Box as="h2">$17k+</Box>
            <Box as="h6">Active Users</Box>
            <Box className="tertiary-content">
              have been onboarded and also successfully treated
            </Box>
          </Col>
          <Col className="my-3 px-3" xs={6} md={3} data-anim_delay="0.3">
            <Box as="h2">$20k+</Box>
            <Box as="h6">Monthly Recurrent Revenue </Box>
            <Box className="tertiary-content">has been generated since the initial launch</Box>
          </Col>
          <Col className="my-3 px-3" xs={6} md={3} data-anim_delay="0.4">
            <Box as="h2">3000+</Box>
            <Box as="h6"> Homes</Box>
            <Box className="tertiary-content">
              visited across the globe since the initial launch
            </Box>
          </Col>
        </RevealOnScroll>
        {/* User Statistics End */}
      </RevealOnScroll>
    </Container>
  );
};

export default Header;

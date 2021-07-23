import { Box } from 'src/components/shared';
import { useEffect, useRef } from 'react';
import { ScrollReveal } from 'src/utils';

import S from 'src/styles/pages/about/our-company/index.module.scss';
import { Container } from 'react-bootstrap';

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
      ref={headerRef as any}>
      <Container>
        {/* <RevealOnScroll once>
          <Row className="justify-content-md-center">
            <Col xs={12} md={8}>
              <RevealOnScroll className="pt-3 pb-2">
                <Box as="h1" className="mt-3">
                  Technology for health care
                </Box>
              </RevealOnScroll>
            </Col>
          </Row>
        </RevealOnScroll> */}
        <Box className="row justify-content-md-center text-md-center">
          <Box className="col-12 col-md-8">
            <Box as="h1" className="mt-3">
              Technology for health care
            </Box>
            <Box as="p" className="primary-content px-md-5 mx-md-4">
              We combine modern health strategies and technological expertise to create digital
              experiences that addresses the challenges of accessing medical health.
            </Box>
            <Box className="primary-content px-md-5 mx-md-5">
              We do this by offering low cost medical services from online to door-step outreach.
            </Box>
          </Box>
        </Box>

        {/* user statistics start here */}
        <Box className="row justify-content-center my-5">
          <Box className="col-6 col-lg-3 col-sm-6 my-3 px-3">
            <Box as="h2">$5K+</Box>
            <Box as="h6">Certified Doctors</Box>
            <Box className="tertiary-content">
              and Health Practitioners across all medical fields
            </Box>
          </Box>
          <Box className="col-6 col-lg-3 col-sm-6 my-3 px-3 ">
            <Box as="h2">$17k+</Box>
            <Box as="h6">Active Users</Box>
            <Box className="tertiary-content">
              have been onboarded and also successfully treated
            </Box>
          </Box>
          <Box className="col-6 col-lg-3 col-sm-6 my-3 px-3">
            <Box as="h2">$20k+</Box>
            <Box as="h6">Monthly Recurrent Revenue </Box>
            <Box className="tertiary-content">has been generated since the initial launch</Box>
          </Box>
          <Box className="col-6 col-lg-3 col-sm-6 my-3 px-3">
            <Box as="h2">3000+</Box>
            <Box as="h6"> Homes</Box>
            <Box className="tertiary-content">
              visited across the globe since the initial launch
            </Box>
          </Box>
        </Box>
        {/* User Statistics End */}
      </Container>
    </Container>
  );
};

export default Header;

// This is the global AppFooter that is common to all pages.

import { Box, Anchor, Logo } from '.';
import { Container, Row, Col } from 'react-bootstrap';
import { memo } from 'react';

const AppFooter = (): JSX.Element => {
  return (
    <Container as="footer" fluid className="AppFooter p-3 py-5">
      <Container className="">
        <hr />
        <Row className="row mx-0 text-left">
          <Col
            sm={6}
            md={5}
            lg={3}
            className="__about __group mb-0 order-2 order-lg-0 ps-0  pe-0 pe-md-4 pe-lg-5">
            <Logo className="pb-0 mb-0 mt-3 mt-md-0" />

            <Box as="p" className="mt-2">
              We are a technology company that offers low cost medical services from online to
              door-step outreach.
            </Box>

            <Box className="__social-links d-flex my-3">
              <Anchor button _type="icon-button" href="https://facebook.com/cribmd" target="_blank">
                <Box as="i" className="fab fa-facebook-f"></Box>
              </Anchor>
              <Anchor button _type="icon-button" href="https://twitter.com/crib_md" target="_blank">
                <Box as="i" className="fab fa-twitter"></Box>
              </Anchor>
              <Anchor
                button
                _type="icon-button"
                href="https://www.linkedin.com/company/cribmd"
                target="_blank">
                <Box as="i" className="fab fa-linkedin-in"></Box>
              </Anchor>
              <Anchor
                button
                _type="icon-button"
                href="https://www.instagram.com/cribmd/"
                target="_blank">
                <Box as="i" className="fab fa-instagram"></Box>
              </Anchor>
              <Anchor
                button
                _type="icon-button"
                href="https://www.youtube.com/channel/UCMiVsvcvj-ru54-gwwH3d7g"
                target="_blank">
                <Box as="i" className="fab fa-youtube"></Box>
              </Anchor>
            </Box>

            <hr className="my-4" />

            <Box as="p">
              <Anchor href="mailto:ossai@cribmd.com">ossai@cribmd.com</Anchor>
              <br />
              <Anchor href="mailto:support@cribmd.com">support@cribmd.com</Anchor>
            </Box>

            <hr className="my-3" />

            <Box as="p" className="theme-tertiary">
              &copy; 2020 CribMD. All rights reserved.
            </Box>
          </Col>

          <Row className="row mx-0 px-0 order-0 order-lg-1 col-sm-8 col-lg-7">
            <Col xs={6} md={3} className="__for-patients __group">
              <Box as="h5" className="mb-3">
                For Patients
              </Box>
              <Box>
                <Anchor href="/patient/dashboard">Search for Doctors</Anchor>
              </Box>
              <Box>
                <Anchor href="/login">Login</Anchor>
              </Box>
              <Box>
                <Anchor href="/signup">Register</Anchor>
              </Box>
              <Box>
                <Anchor href="/doctor/dashboard">Booking</Anchor>
              </Box>
            </Col>

            <Col xs={6} md={3} className="__for-doctors __group mb-4 pe-0">
              <Box as="h5" className="mb-3">
                For Doctors
              </Box>
              <Box>
                <Anchor href="/doctor/dashboard">Appointments</Anchor>
              </Box>
              <Box>
                <Anchor href="/login">Login</Anchor>
              </Box>
              <Box>
                <Anchor href="/signup">Register</Anchor>
              </Box>
            </Col>

            <Box className="__company __group mb-4 col-6 col-md-3 ps-0">
              <Box as="h5" className="mb-3">
                Company
              </Box>
              <Box>
                <Anchor routeLink href="/about/our-company">
                  About Us
                </Anchor>
              </Box>

              <Box>
                <Anchor routeLink href="/health-plans/individual">
                  Individual Plan
                </Anchor>
              </Box>

              <Box>
                <Anchor routeLink href="/health-plans/corporate">
                  Corporate Plan
                </Anchor>
              </Box>
              <Box>
                <Anchor routeLink href="/faq">
                  FAQ
                </Anchor>
              </Box>
            </Box>

            <Box className="__legal __group mb-4 col-6 col-md-3 ps-md-0">
              <Box as="h5" className="mb-3">
                Legal
              </Box>
              <Box>
                <Anchor href="/legal/privacy">Privacy Policy</Anchor>
              </Box>
              {/* <Box>
                <Anchor href="/legal/privacy">Terms of Service</Anchor>
              </Box> */}
            </Box>
          </Row>

          <Col sm={4} lg={2} className="__contact __group mb-4 order-1 order-lg-2 px-0">
            <Box as="h5" className="mb-3">
              Contact
            </Box>
            <Box className="d-flex">
              <Box as="span">
                <Box className="fas fa-map-marker-alt me-2 mt-1"></Box>
              </Box>
              <Box as="address">23777 Mulholland Hwy Calabasas, California, CA 91302.</Box>
            </Box>
            <Box className="d-flex">
              <Box as="span">
                <Box className="fas fa-map-marker-alt me-2 mt-1"></Box>
              </Box>
              <Box as="address">4 Babatope Bejide Cres, Lekki Phase 1, Lagos, Nigeria 105102.</Box>
            </Box>

            <hr className="my-3" />

            <Box as="p" className="d-flex w-100">
              <Box as="i" className="fas fa-phone-alt me-2 mt-1"></Box>
              <Anchor href="tel:+16312381645">+1 631-238-1645</Anchor>
            </Box>
            <Box as="p" className="d-flex">
              <Box as="i" className="fas fa-phone-alt me-2 mt-1"></Box>
              <Anchor href="tel:+2349060346075">+234 906 034 6075</Anchor>
            </Box>
            <Box as="p" className="d-flex">
              <Box as="i" className="fas fa-phone-alt me-2 mt-1"></Box>
              <Anchor href="tel:+2348081951702">+234 808 195 1702</Anchor>
            </Box>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default memo(AppFooter);

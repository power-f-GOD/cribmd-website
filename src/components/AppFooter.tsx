// This is the global AppFooter that is common to all pages.

import { Container, Row, Col } from 'react-bootstrap';
import { memo, useRef, useContext, useEffect, useCallback } from 'react';

import { Box, Anchor, Logo, RevealOnScroll, SVGIcon, LazyBox } from '.';
import { AppWindowContext } from 'src/pages/_app';
import { ScrollReveal } from 'src/utils';
import { SVGIconName } from 'src/types';

const socialLinks = [
  'facebook|https://facebook.com/cribmd',
  'twitter|https://twitter.com/crib_md',
  'instagram|https://www.instagram.com/cribmd/',
  'youtube|https://www.youtube.com/channel/UCMiVsvcvj-ru54-gwwH3d7g'
];
const linksForPatients = [
  'Search for Doctos|https://app.cribmd.com/login?rURL=patient/doctors-list',
  'Login|https://app.cribmd.com/login',
  'Signup|https://app.cribmd.com/signup',
  'Booking|https://app.cribmd.com/login?rURL=patient/appointments'
];
const linksForDoctors = [
  'Appointments|https://app.cribmd.com/login?rURL=doctor/dashboard',
  'Login|https://app.cribmd.com/login',
  'Signup|https://app.cribmd.com/login'
];
const companyLinks = [
  'Home|/',
  'Our Company|/about/our-company',
  'CribMD in the News|/about/in-the-news',
  'Gallery|/about/gallery',
  'Individual Health Plan|/health-plans/individual',
  'Corporate Health Plan|/health-plans/corporate',
  'FAQ|/faq'
];

const AppFooter = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const footerRef = useRef<HTMLElement | null>(null);

  const handleRenderLinks = useCallback((link: string) => {
    const [text, url] = link.split('|');

    return (
      <Box key={text}>
        <Anchor href={url}>{text}</Anchor>
      </Box>
    );
  }, []);

  useEffect(() => {
    const footer = footerRef.current;

    if (footer) {
      const scrollReveal = new ScrollReveal(footer, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <Container as="footer" fluid className="AppFooter p-3 py-5" ref={footerRef}>
      <LazyBox className="container">
        <hr />
        <Row className="row mx-0 text-left">
          <RevealOnScroll
            component={Col}
            sm={6}
            md={5}
            lg={3}
            className="__about __group mb-0 order-2 order-lg-0 ps-0 pe-0 pe-md-4 pe-lg-5"
            animName="fadeInRight">
            <Logo preserveText className="pb-0 mb-0 mt-3 mt-md-0" />

            <Box as="p" className="mt-2">
              We are a technology company that offers low cost medical services from online to
              door-step outreach.
            </Box>

            <Box className="__social-links d-flex my-3">
              {socialLinks.map((link) => {
                const [iconName, url] = link.split('|');

                return (
                  <Anchor
                    key={iconName}
                    button
                    _type="icon-button"
                    href={url}
                    target="_blank"
                    rel="noopener">
                    <SVGIcon name={iconName as SVGIconName} />
                  </Anchor>
                );
              })}

              {/* <Anchor
                button
                _type="icon-button"
                href="https://www.linkedin.com/company/cribmd"
                target="_blank"
                rel="noopener">
                <SVGIcon name="facebook" />
              </Anchor> */}
            </Box>

            <hr className="my-4" />

            <Box as="p">
              <Anchor
                href="mailto:ossai@cribmd.com"
                className="d-inline-flex align-items-center mb-2">
                <SVGIcon name="mail" className="me-2" />
                ossai@cribmd.com
              </Anchor>
              <br />
              <Anchor
                href="mailto:support@cribmd.com"
                className="d-inline-flex align-items-center mb-2">
                <SVGIcon name="mail" className="me-2" />
                support@cribmd.com
              </Anchor>
            </Box>

            <hr className="my-3" />

            <Box as="p" className="theme-tertiary">
              &copy; 2020 CribMD. All rights reserved.
            </Box>
          </RevealOnScroll>

          <RevealOnScroll
            component={Row}
            className="row mx-0 px-0 order-0 order-lg-1 col-sm-8 col-lg-7">
            <Col xs={6} md={3} className="__for-patients __group">
              <Box as="h3" className="mb-3">
                For Patients
              </Box>
              {linksForPatients.map(handleRenderLinks)}
            </Col>

            <Col xs={6} md={3} className="__for-doctors __group mb-4 pe-0">
              <Box as="h3" className="mb-3">
                For Doctors
              </Box>
              {linksForDoctors.map(handleRenderLinks)}
            </Col>

            <Col xs={6} md={3} className="__company __group mb-4 ps-0">
              <Box as="h3" className="mb-3">
                Company
              </Box>
              {companyLinks.map(handleRenderLinks)}
            </Col>

            <Col xs={6} md={3} className="__legal __group mb-4 ps-md-0">
              <Box as="h3" className="mb-3">
                Legal
              </Box>
              {/* <Box>
                <Anchor href="/legal/privacy">Privacy Policy</Anchor>
              </Box> */}
              {/* <Box>
                <Anchor href="/legal/privacy">Terms of Service</Anchor>
              </Box> */}
            </Col>
          </RevealOnScroll>

          <RevealOnScroll
            component={Col}
            sm={4}
            lg={2}
            animName="fadeInLeft"
            className="__contact __group mb-4 order-1 order-lg-2 px-0">
            <Box as="h3" className="mb-3">
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
              <Anchor href="tel:+16312381645" className="d-inline-flex align-items-center">
                <SVGIcon name="phone" className="me-2" /> +1 631-238-1645
              </Anchor>
            </Box>
            <Box as="p" className="d-flex">
              <Box as="i" className="fas fa-phone-alt me-2 mt-1"></Box>
              <Anchor href="tel:+2349060346075" className="d-inline-flex align-items-center">
                <SVGIcon name="phone" className="me-2" /> +234 906 034 6075
              </Anchor>
            </Box>
            <Box as="p" className="d-flex">
              <Box as="i" className="fas fa-phone-alt me-2 mt-1"></Box>
              <Anchor href="tel:+2348081951702" className="d-inline-flex align-items-center">
                <SVGIcon name="phone" className="me-2" /> +234 808 195 1702
              </Anchor>
            </Box>
          </RevealOnScroll>
        </Row>
      </LazyBox>
    </Container>
  );
};

export default memo(AppFooter);

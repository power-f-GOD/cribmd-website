import { Row, Col } from 'react-bootstrap';

import { Box, PageHeader, RevealOnScroll } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <PageHeader
      headerText=" Technology for health care"
      rider="We combine modern health strategies and technological expertise to create digital
    experiences that addresses the challenges of accessing medical health. <br /><br /> We do this by offering low cost medical services from online to door-step outreach.">
      <RevealOnScroll component={Row} className="justify-content-center text-start" easing="ease">
        <Col className="mb-3 pe-3" xs={6} md={3} data-anim_delay="0.1">
          <Box as="p" className="h2">
            $5K+
          </Box>
          <Box as="p" className="h6">
            Certified Doctors
          </Box>
          <Box as="p" className="tertiary-content">
            and Health Practitioners across all medical fields
          </Box>
        </Col>
        <Col className="mb-3 pe-3" xs={6} md={3} data-anim_delay="0.2">
          <Box as="p" className="h2">
            $17k+
          </Box>
          <Box as="p" className="h6">
            Active Users
          </Box>
          <Box as="p" className="tertiary-content">
            have been onboarded and also successfully treated
          </Box>
        </Col>
        <Col className="mb-3 pe-3" xs={6} md={3} data-anim_delay="0.3">
          <Box as="p" className="h2">
            $20k+
          </Box>
          <Box as="p" className="h6">
            Monthly Recurrent Revenue
          </Box>
          <Box as="p" className="tertiary-content">
            has been generated since the initial launch
          </Box>
        </Col>
        <Col className="mb-3 pe-3" xs={6} md={3} data-anim_delay="0.4">
          <Box as="p" className="h2">
            3000+
          </Box>
          <Box as="p" className="h6">
            Homes
          </Box>
          <Box as="p" className="tertiary-content">
            visited across the globe since the initial launch
          </Box>
        </Col>
      </RevealOnScroll>
    </PageHeader>
  );
};

export default Header;

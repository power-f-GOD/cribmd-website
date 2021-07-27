import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Box, RevealOnScroll } from 'src/components/shared';

const MainBody = (): JSX.Element => {
  return (
    <>
      <RevealOnScroll component={Container} className="mb-5 pb-5">
        <Box as="h2" data-anim_delay="0.3">
          How it works
        </Box>
      </RevealOnScroll>

      <RevealOnScroll component={Container}>
        <Row className="pe-md-3">
          <Col xs={12} md={6}>
            <RevealOnScroll>
              <Box as="h4" data-anim_delay="0.3">
                Create Your CribMD Personal Profile
              </Box>
            </RevealOnScroll>
            <RevealOnScroll className="me-md-5 pe-md-5">
              <Box as="p" className="secondary-content">
                If you do not already have an account with CribMD, then the first step is to:
              </Box>
            </RevealOnScroll>
          </Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </RevealOnScroll>
    </>
  );
};
export default memo(MainBody);

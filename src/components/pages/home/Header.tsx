import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Box, Anchor } from 'src/components/shared';
import S from 'src/styles/pages/index/Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <Container as="header">
      <Row as="section" className={`${S.hero}`}>
        <Box className={`${S.ellipse}`}></Box>
        <Box className={`${S.ellipse}`}></Box>
        <Box className={`${S.ellipse}`}></Box>
        <Box className={`${S.ellipse}`}></Box>
        <Box className={`${S.ellipse}`}></Box>

        <Col xs={12} md={6}>
          <Box as="h1">The digital health consultation platform just for you</Box>
          <Box as="p">
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
        <Col xs={12} md={6}></Col>
      </Row>
    </Container>
  );
};

export default Header;

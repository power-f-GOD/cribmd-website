/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, FC } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import { Box, Img } from '.';
import { GetImage } from 'src/utils';
import { AppstoreButton, PlaystoreButton } from './Button';
import { RevealOnScroll } from './RevealOnScroll';

const _GetMobileAppCard: FC<{ headerText?: string; bodyText?: string }> = ({
  headerText,
  bodyText
}): JSX.Element => {
  return (
    <Container as="section" className="GetMobileAppCard shrink-max-width-xxl text-center">
      <Row className="px-3 py-4 px-md-5 py-md-3 align-items-center">
        <Col xs={12} md={7} className="text-md-start">
          <RevealOnScroll animName="fadeInRight" easing="ease">
            <Box as="h2" className="h3 theme-white">
              {headerText || 'Your Doctor On The Go'}
            </Box>
            <Box as="p" className="theme-tertiary-lighter">
              {bodyText ||
                `Book a same day appointment at your convenience either from our mobile app or web app
            and have a secure chat with any of our licensed doctors.`}
            </Box>
            <Box>
              <PlaystoreButton className="me-3" />
              <AppstoreButton />
            </Box>
          </RevealOnScroll>
        </Col>
        <RevealOnScroll
          component={Col}
          xs={12}
          md={5}
          className="text-center"
          easing="ease"
          delay={0.5}
          allowOverflow>
          <Box>
            <Img className="__mobile-dashboard" src={GetImage.shared('mobile-dashboard')} />
          </Box>
        </RevealOnScroll>
      </Row>
    </Container>
  );
};

export const GetMobileAppCard = memo(_GetMobileAppCard);

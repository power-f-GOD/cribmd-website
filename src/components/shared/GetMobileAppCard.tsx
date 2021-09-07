/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, FC } from 'react';
import { Col, Row } from 'react-bootstrap';

import { Box, Img } from '.';
import { GetImage } from 'src/utils';
import { AppstoreButton, PlaystoreButton } from './Button';
import { RevealOnScroll } from './RevealOnScroll';

const _GetMobileAppCard: FC<{ headerText?: string; bodyText?: string }> = ({
  headerText,
  bodyText
}): JSX.Element => {
  return (
    <Row
      as="section"
      className="GetMobileAppCard shrink-max-width-xxl text-center px-3 pt-4 px-md-5 mx-auto align-items-center container">
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
          <Box className="d-flex flex-wrap justify-content-center justify-content-md-start mb-3 mt-4">
            <PlaystoreButton className="mx-2 mx-md-0 me-md-3 mb-2" />
            <AppstoreButton className="mx-2 mx-md-0 me-md-3 mb-2" />
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
          <Img
            width="350"
            height="350"
            className="__mobile-dashboard mt-0 mt-md-5"
            src={GetImage.shared('mobile-dashboard')}
          />
        </Box>
      </RevealOnScroll>
    </Row>
  );
};

export const GetMobileAppCard = memo(_GetMobileAppCard);

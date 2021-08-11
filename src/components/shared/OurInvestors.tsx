/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img } from '.';
import { GetImage } from 'src/utils';
import { RevealOnScroll } from './RevealOnScroll';

const _OurInvestors = (): JSX.Element => {
  return (
    <Container as="section" className="OurInvestors">
      <RevealOnScroll easing="ease">
        <Box as="h2" className="text-md-center">
          Our Investors
        </Box>
      </RevealOnScroll>

      <RevealOnScroll className="__grid mx-auto" animName="scale" easing="ease-out" duration={0.5}>
        {['sputnik', 'norrsken', 'the-guardian'].map((logo) => (
          <Box
            as="span"
            key={logo}
            className="__grid-item d-flex align-items-center p-3 px-md-5 py-md-4">
            <Img src={GetImage.investorLogo(logo)} />
          </Box>
        ))}
      </RevealOnScroll>
    </Container>
  );
};

export const OurInvestors = memo(_OurInvestors);

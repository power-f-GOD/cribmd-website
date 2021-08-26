/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, FC, useCallback } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img, RevealOnScroll } from '.';
import { GetImage } from 'src/utils';
import { partners } from 'src/data';

const _OurPartners: FC<{ shrink?: boolean }> = (): JSX.Element => {
  const gridItemClassName = '__grid-item d-flex align-items-center py-3 px-4 px-lg-5 py-sm-4';

  return (
    <Container as="section" className={`OurPartners shrink-max-width-xxl text-md-center`}>
      <RevealOnScroll easing="ease">
        <Box as="h2" className="mb-0">
          Our Partners
        </Box>
        <Box as="p" className="pb-md-3">
          We share our vision and passion to bring affordable healthcare to everyone with these
          organizations
        </Box>
      </RevealOnScroll>

      <Box className="__grid first mx-auto">
        {partners.map(
          useCallback(
            (_, i) => (
              <RevealOnScroll
                as="span"
                animName="scale"
                easing="ease-out"
                key={i}
                duration={0.5}
                className={gridItemClassName}>
                <Img src={GetImage.partnerLogo(`partner_${i}`)} />
              </RevealOnScroll>
            ),
            []
          )
        )}
      </Box>

      {/* <RevealOnScroll
        className="__grid second mx-auto"
        animName="scale"
        easing="ease-out"
        duration={0.5}>
        {partnerImageNames.slice(8).map((logo) => (
          <Box as="span" key={logo} className={gridItemClassName}>
            <Img src={GetImage.partnerLogo(logo)} />
          </Box>
        ))}
      </RevealOnScroll> */}
    </Container>
  );
};

export const OurPartners = memo(_OurPartners);

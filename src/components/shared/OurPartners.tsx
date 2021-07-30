/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img } from '.';
import { GetImage } from 'src/utils';

const _OurPartners = (): JSX.Element => {
  return (
    <Container as="section" className="OurPartners shrink-max-width-xxl text-md-center">
      <Box as="h2" className="mb-0">
        Our Partners
      </Box>
      <Box as="p" className="pb-md-3">
        We share our vision and passion to bring affordable healthcare to everyone with these
        organizations
      </Box>

      <Box className="__grid mx-auto">
        {[
          'algrowithm',
          'andaman',
          'atlanta-fire-rescue',
          'bora',
          'ihs',
          'launchpad',
          'longenesis',
          'lorna',
          'mepro',
          'oncore',
          'pioneer-pharma',
          'stella-technology',
          'the-guardian',
          'transahel',
          'ucla',
          'usc'
        ].map((logo) => (
          <Box
            as="span"
            key={logo}
            className="__grid-item d-flex align-items-center p-3 px-sm-4 px-md-5 py-sm-4">
            <Img src={GetImage.partnerLogo(logo)} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export const OurPartners = memo(_OurPartners);

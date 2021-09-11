/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, useCallback, useMemo } from 'react';

import { Box, Img, Anchor } from '.';
import { GetImage } from 'src/utils';
import { RevealOnScroll } from './RevealOnScroll';

const _OurInvestors = (): JSX.Element => {
  return (
    <Box lazy as="section" className="OurInvestors container">
      <RevealOnScroll easing="ease">
        <Box as="h2" className="text-md-center">
          Our Investors
        </Box>
      </RevealOnScroll>

      <RevealOnScroll className="__grid mx-auto" animName="scale" easing="ease-out" duration={0.5}>
        {useMemo(
          () => ['sputnik|sputnikatx.com', 'norrsken|norrsken.org', 'the-guardian|guardian.ng'],
          []
        ).map(
          useCallback((investor) => {
            const [imageName, url] = investor.split('|');

            return (
              <Anchor
                href={`https://www.${url}`}
                key={investor}
                title={url}
                target="_blank"
                className="__grid-item d-flex align-items-center p-3 px-md-5 py-md-4"
                rel="noopener">
                <Img src={GetImage.investorLogo(imageName)} width="125" height="55" />
              </Anchor>
            );
          }, [])
        )}
      </RevealOnScroll>
    </Box>
  );
};

export const OurInvestors = memo(_OurInvestors);

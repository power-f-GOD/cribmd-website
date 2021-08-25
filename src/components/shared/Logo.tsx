import { FC, memo } from 'react';

import { SVG } from './SVG';
import { Box } from './Box';
import { SVGIcon } from './SVG.Icons';
import { Anchor } from './Link';

const _Logo: FC<{ variant?: 'on-white' | 'on-black' | 'on-blue'; className?: string }> = ({
  className
}): JSX.Element => {
  return (
    <Box className={`Logo top px-0 ${className || ''}`.trim()}>
      <Anchor routeLink href="/">
        <SVGIcon name="cribmd-logo--blue" className="me-2" />
        <SVGIcon name="cribmd-logo-text" />

        <SVG
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icon-css-ng"
          viewBox="0 0 512 512"
          className="flag-icon d-inline-block">
          <path fill="#fff" d="M0 0h512v512H0z" />
          <path fill="#008753" d="M341.3 0H512v512H341.3zM0 0h170.7v512H0z" />
        </SVG>
      </Anchor>
    </Box>
  );
};

export const Logo = memo(_Logo);

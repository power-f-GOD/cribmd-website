import Link from 'next/link';
import { FC } from 'react';
import { SVG, Box, Img } from '.';

export const Logo: FC<{ variant?: 'on-white' | 'on-black' | 'on-blue'; className?: string }> = ({
  variant,
  className
}): JSX.Element => {
  return (
    <Box className={`Logo top px-0 ${className || ''}`.trim()}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icon-css-ng"
        viewBox="0 0 512 512"
        className="flag-icon d-inline-block">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#fff" d="M0 0h512v512H0z" />
          <path fill="#008753" d="M341.3 0H512v512H341.3zM0 0h170.7v512H0z" />
        </g>
      </SVG>
      <Link href="/">
        <a>
          <Img
            srcSet={`/img/logo/cribmd/logo-${
              variant || 'on-white'
            }__500x.webp 2x, /img/logo/cribmd/logo-${variant || 'on-white'}__250x.webp 1x`}
            sizes="200px"
            alt="CribMD logo"
          />
        </a>
      </Link>
    </Box>
  );
};

import Link from 'next/link';
import { SyntheticEvent, FC, useCallback } from 'react';
import { SVG, Box, Img } from '.';

const Logo: FC<{ variant?: 'on-white' | 'on-black' | 'on-blue' }> = ({ variant }): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;

    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  return (
    <Box className="Logo top px-0">
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
            srcSet={`/img/logo/logo-${variant || 'on-white'}__500x.webp 2x, /img/logo/logo-${
              variant || 'on-white'
            }__250x.webp 1x`}
            sizes="200px"
            alt="CribMD logo"
            onError={handleImgError}
          />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, FC, useState, useCallback, CSSProperties } from 'react';

import { Box, Img, LoadingSkeleton, Anchor } from '.';

const _Avatar: FC<{
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'fill' | 'auto';
  variant?: 'square' | 'circle';
  noFrame?: boolean;
  elevation?: '0' | '1' | '2' | '3' | '4' | '5';
  src: string;
  className?: string;
  isClickable?: boolean;
  href?: string;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}> = ({ size, variant, noFrame, elevation, className, src, href, style }): JSX.Element => {
  const Component = href ? Anchor : Box;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasErred, setHasErred] = useState(false);

  const handleImgLoad = useCallback(() => {
    setHasLoaded(true);
  }, []);

  const handleImgError = useCallback(() => {
    setHasErred(true);
  }, []);

  return (
    <Component
      className={`Avatar elevation--${elevation || 0} ${className || ''} variant--${
        variant || 'circle'
      } ${!noFrame ? 'has-frame' : ''} size--${size || 'medium'} ${
        href ? 'is-anchor' : ''
      }`.replace(/\s+/gi, ' ')}
      {...(href ? { href } : {})}
      {...(style ? { style } : {})}>
      {!hasErred && (
        <Img src={src} className="Avatar__img" onLoad={handleImgLoad} onError={handleImgError} />
      )}
      {hasErred && <Box className="Avatar__no-image" role="img"></Box>}
      {!hasLoaded && <LoadingSkeleton erred={hasErred} />}
    </Component>
  );
};

export const Avatar = memo(_Avatar);

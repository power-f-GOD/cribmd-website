/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, FC, useState, useCallback, CSSProperties, useEffect, useRef } from 'react';

import { Box, Img, LoadingSkeleton, Anchor } from '.';
import { createIntersectionObserver, delay } from 'src/utils';

let observer: IntersectionObserver;

const _Avatar: FC<{
  isJPG?: boolean;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'fill' | 'auto';
  variant?: 'square' | 'circle';
  noFrame?: boolean;
  elevation?: '0' | '1' | '2' | '3' | '4' | '5';
  src: string;
  className?: string;
  isClickable?: boolean;
  href?: string;
  alt?: string;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}> = ({
  size,
  variant,
  noFrame,
  elevation,
  className,
  src,
  href,
  style,
  isJPG,
  alt
}): JSX.Element => {
  const Component = href ? Anchor : Box;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasErred, setHasErred] = useState(false);
  const [source, setSource] = useState('');
  const avatarRef = useRef<Element | null>();

  const handleImgLoad = useCallback(() => {
    setHasLoaded(true);
  }, []);

  const handleImgError = useCallback((e) => {
    if (/\.(png|jpe?g)$/.test(e.target.src)) {
      setHasErred(true);
    }
  }, []);

  useEffect(() => {
    delay(250).then(() => {
      const avatar = avatarRef.current;

      observer = createIntersectionObserver(
        null,
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !source) {
              setSource(src);
            } else if (entry.isIntersecting && avatar) {
              observer.unobserve(avatar);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (avatar) {
        observer.observe(avatar);
      }
    });
  }, [src, source]);

  return (
    <Component
      className={`Avatar elevation--${elevation || 0} ${className || ''} variant--${
        variant || 'circle'
      } ${!noFrame ? 'has-frame' : ''} size--${size || 'medium'} ${
        href ? 'is-anchor' : ''
      }`.replace(/\s+/gi, ' ')}
      {...(href ? { href } : {})}
      {...(style ? { style } : {})}
      _ref={avatarRef as any}>
      {source && !hasErred && (
        <Img
          isJPG={isJPG}
          src={src}
          alt={alt || 'avatar'}
          className="Avatar__img"
          onLoad={handleImgLoad}
          onError={handleImgError}
        />
      )}
      {hasErred && <Box className="Avatar__no-image" role="img"></Box>}
      {<LoadingSkeleton erred={hasErred} className={hasLoaded ? 'has-loaded' : ''} />}
    </Component>
  );
};

export const Avatar = memo(_Avatar);

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import { ImgProps } from 'src/types';

const _Img: FC<ImgProps> = ({ isJPG, src, srcSet, onLoad, onError, ...props }): JSX.Element => {
  const [hasRendered, setHasRendered] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && hasRendered) {
      if (srcSet) {
        imgRef.current!.srcset = srcSet || '';
      } else {
        imgRef.current!.src = src || '';
      }
    }
  }, [src, srcSet, hasRendered]);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  return (
    <img
      {...props}
      ref={imgRef as any}
      alt={props.alt || 'image'}
      aria-hidden={props['aria-hidden'] || true}
      onError={useCallback(
        (e) => {
          const img = e.target as HTMLImageElement;
          const _src = img.srcset || img.src || '';

          if (/\.(png|jpe?g)/.test(_src)) {
            if (onError) {
              onError(e);
            }

            return;
          }

          if (/\.webp/i.test(_src)) {
            if (srcSet) {
              img.srcset = srcSet.replace(/\.webp/gi, isJPG ? '.jpg' : '.png');
            } else {
              img.src = src?.replace(/\.webp/gi, isJPG ? '.jpg' : '.png') || '';
            }
          }
        },
        [isJPG, src, srcSet, onError]
      )}
      onLoad={useCallback(
        (e) => {
          (e.target as any).ariaHidden = false;

          if (onLoad) {
            onLoad(e);
          }
        },
        [onLoad]
      )}
    />
  );
};

export const Img = memo(_Img);

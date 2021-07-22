/* eslint-disable @typescript-eslint/no-explicit-any */
import { DetailedHTMLProps, FC, ImgHTMLAttributes, memo } from 'react';

const _Img: FC<
  { isJPG?: boolean } & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = ({ isJPG, ...props }): JSX.Element => {
  return (
    <img
      {...props}
      alt={props.alt || 'image'}
      aria-hidden={true}
      onError={(e) => {
        const img = e.target as HTMLImageElement;

        if (/\.webp/i.test(img.src)) {
          img.src = img.src.replace(/\.webp/i, isJPG ? '.jpg' : '.png');
        } else if (/\.webp/i.test(img.srcset)) {
          img.srcset = img.srcset.replace(/\.webp/gi, isJPG ? '.jpg' : '.png');
        }
      }}
      onLoad={(e) => ((e.target as any).ariaHidden = false)}
    />
  );
};

export const Img = memo(_Img);

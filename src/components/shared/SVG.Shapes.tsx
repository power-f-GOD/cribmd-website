// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps, memo } from 'react';

import { SVG } from './';
import { SVGShapeName } from 'src/types';

const _SVGShape: FC<
  { name: SVGShapeName } & DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name, ...props }): JSX.Element => {
  switch (name) {
    case 'wave':
      return (
        <SVG {...props} viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/SVG">
          <path
            d="M0 0H1440V27.9248C1440 27.9248 1325.5 62.9558 1164.5 59.3354C1077.76 57.385 1019.5 40.1124 901.5 40.1124C783.5 40.1124 683.5 70 562.5 70C460.5 70 357 43.6551 236.5 43.6551C116 43.6551 0 51.5203 0 51.5203V0Z"
            fill="#F8F5FF"
          />
        </SVG>
      );
    default:
      return <></>;
  }
};

export const SVGShape = memo(_SVGShape);

// add/update SVG icons (from the design/Figma) here

import { FC } from 'react';

export type SVGIconName = '';

const SVGIcon: FC<{ name: SVGIconName }> = ({ name }): JSX.Element => {
  switch (name) {
    case '':
      return <></>;
    default:
      return <></>;
  }
};

export default SVGIcon;

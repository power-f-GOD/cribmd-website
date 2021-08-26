import { SVGProps, DetailedHTMLProps, FC, memo } from 'react';

const _SVG: FC<DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>> = ({
  children,
  ...props
}): JSX.Element => {
  return <svg {...props}>{children}</svg>;
};

export const SVG = memo(_SVG);

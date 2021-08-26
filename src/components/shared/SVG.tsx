import { SVGProps, DetailedHTMLProps, FC, memo } from 'react';

const _SVG: FC<DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>> = ({
  children,
  ...props
}): JSX.Element => {
  return <svg {...props}>{children}</svg>;
};
export const SVG = memo(_SVG);

export const SVGEllipse: FC<{ type?: '1' | '2' | '3' | '4' | '5' }> = ({ type }): JSX.Element => {
  switch (type) {
    case '1':
      return (
        <SVG
          width="848"
          height="654"
          viewBox="0 0 848 654"
          fill="none"
          className="SVG__ellipse"
          xmlns="http://www.w3.org/2000/SVG">
          <g filter="url(#filter0_f)">
            <ellipse cx="82.5" cy="99.5" rx="331.5" ry="251.5" fill="#19A6F5" fillOpacity="0.05" />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="-683"
              y="-586"
              width="1531"
              height="1371"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="217" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </SVG>
      );
    case '2':
      return (
        <SVG
          width="1120"
          height="654"
          viewBox="0 0 1120 654"
          fill="none"
          className="SVG__ellipse"
          xmlns="http://www.w3.org/2000/SVG">
          <g filter="url(#filter0_f)">
            <ellipse
              cx="765.5"
              cy="637.5"
              rx="331.5"
              ry="251.5"
              fill="#19A6F5"
              fillOpacity="0.05"
            />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0"
              y="-48"
              width="1531"
              height="1371"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="217" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </SVG>
      );
    case '3':
      return (
        <SVG
          width="976"
          height="654"
          viewBox="0 0 976 654"
          fill="none"
          className="SVG__ellipse"
          xmlns="http://www.w3.org/2000/SVG">
          <g filter="url(#filter0_f)">
            <ellipse cx="797.5" cy="101" rx="363.5" ry="284" fill="#1922F5" fillOpacity="0.12" />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0"
              y="-617"
              width="1595"
              height="1436"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="217" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </SVG>
      );
    case '4':
      return (
        <SVG
          width="1108"
          height="654"
          viewBox="0 0 1108 654"
          fill="none"
          className="SVG__ellipse"
          xmlns="http://www.w3.org/2000/SVG">
          <g filter="url(#filter0_f)">
            <ellipse cx="310.5" cy="633" rx="343.5" ry="247" fill="#1922F5" fillOpacity="0.06" />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="-487"
              y="-68"
              width="1595"
              height="1402"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="227" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </SVG>
      );
    default:
      return (
        <SVG
          width="928"
          height="654"
          viewBox="0 0 928 654"
          fill="none"
          className="SVG__ellipse"
          xmlns="http://www.w3.org/2000/SVG">
          <g filter="url(#filter0_f)">
            <ellipse cx="168.5" cy="543" rx="305.5" ry="220" fill="#1971F5" fillOpacity="0.09" />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="-591"
              y="-131"
              width="1519"
              height="1348"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="227" result="effect1_foregroundBlur" />
            </filter>
          </defs>
        </SVG>
      );
  }
};

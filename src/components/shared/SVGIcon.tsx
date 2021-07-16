// Add/Update SVG icons (from the design/Figma) here

import { FC, SVGProps, DetailedHTMLProps } from 'react';
import { SVG } from './Box';
import { Icon } from '.';
import { SVGIconName } from 'src/types';

const SVGIcon: FC<
  { name: SVGIconName } & DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = ({ name }): JSX.Element => (
  <Icon name={name}>
    {(() => {
      switch (name) {
        case 'credit-card-individual':
          return (
            <SVG fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <path
                d="M29.625 22.75V14.8438C29.625 13.8945 28.8415 13.125 27.875 13.125H12.125C11.1585 13.125 10.375 13.8945 10.375 14.8438V25.1562C10.375 26.1055 11.1585 26.875 12.125 26.875H20"
                stroke="#C6ABE7"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.375 17.25H29.625"
                stroke="#C6ABE7"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M29.1673 29.625V28.7083C29.1673 28.2221 28.9742 27.7558 28.6303 27.412C28.2865 27.0682 27.8202 26.875 27.334 26.875H23.6673C23.1811 26.875 22.7148 27.0682 22.371 27.412C22.0271 27.7558 21.834 28.2221 21.834 28.7083V29.625"
                stroke="#651CBF"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.4993 25.0417C26.5119 25.0417 27.3327 24.2209 27.3327 23.2083C27.3327 22.1958 26.5119 21.375 25.4993 21.375C24.4868 21.375 23.666 22.1958 23.666 23.2083C23.666 24.2209 24.4868 25.0417 25.4993 25.0417Z"
                stroke="#651CBF"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SVG>
          );
        case 'credit-card-corporate':
          return (
            <SVG
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M29.625 22.75V14.8438C29.625 13.8945 28.8415 13.125 27.875 13.125H12.125C11.1585 13.125 10.375 13.8945 10.375 14.8438V22.75"
                stroke="#F8A362"
                strokeOpacity="0.5"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.375 17.25H29.625"
                stroke="#FBCCA9"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.5 27.875V27.125C28.5 26.7272 28.342 26.3456 28.0607 26.0643C27.7794 25.783 27.3978 25.625 27 25.625H24C23.6022 25.625 23.2206 25.783 22.9393 26.0643C22.658 26.3456 22.5 26.7272 22.5 27.125V27.875"
                stroke="#F8A362"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.5 24.125C26.3284 24.125 27 23.4534 27 22.625C27 21.7966 26.3284 21.125 25.5 21.125C24.6716 21.125 24 21.7966 24 22.625C24 23.4534 24.6716 24.125 25.5 24.125Z"
                stroke="#F8A362"
                strokeWidth="0.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.6654 31.25V30.0833C20.6654 29.4645 20.4195 28.871 19.9819 28.4334C19.5444 27.9958 18.9509 27.75 18.332 27.75H13.6654C13.0465 27.75 12.453 27.9958 12.0154 28.4334C11.5779 28.871 11.332 29.4645 11.332 30.0833V31.25"
                stroke="#F8A362"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0013 25.4167C17.29 25.4167 18.3346 24.372 18.3346 23.0833C18.3346 21.7947 17.29 20.75 16.0013 20.75C14.7126 20.75 13.668 21.7947 13.668 23.0833C13.668 24.372 14.7126 25.4167 16.0013 25.4167Z"
                stroke="#F8A362"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SVG>
          );
        case 'volume':
          return (
            <SVG viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/SVG">
              <path opacity="0.1" d="M8 16L19 34" stroke="#F8A362" strokeWidth="0.4" />
              <path opacity="0.1" d="M8 16.5L22 8" stroke="#F8A362" strokeWidth="0.4" />
              <path opacity="0.1" d="M8.5 16.5L31.5 24" stroke="#F8A362" strokeWidth="0.4" />
              <path
                d="M19.166 14.1667L14.9993 17.5001H11.666V22.5001H14.9993L19.166 25.8334V14.1667Z"
                stroke="#F8A362"
                strokeWidth="1.85714"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.8919 14.1084C27.4541 15.6711 28.3317 17.7904 28.3317 20.0001C28.3317 22.2098 27.4541 24.329 25.8919 25.8917M22.9502 17.0501C23.7313 17.8314 24.1701 18.891 24.1701 19.9959C24.1701 21.1007 23.7313 22.1604 22.9502 22.9417"
                stroke="#F8A362"
                strokeWidth="1.85714"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle opacity="0.5" cx="19" cy="34" r="1" fill="#F8A362" />
              <circle opacity="0.5" cx="8" cy="16" r="1" fill="#F8A362" />
              <circle opacity="0.5" cx="22" cy="8" r="1" fill="#F8A362" />
              <circle opacity="0.3" cx="32.5" cy="9.5" r="0.5" fill="#F8A362" />
              <circle opacity="0.5" cx="31" cy="24" r="1" fill="#F8A362" />
              <circle opacity="0.3" cx="9.5" cy="30.5" r="0.5" fill="#F8A362" />
              <path opacity="0.1" d="M19 34L22 8" stroke="#F8A362" strokeWidth="0.4" />
              <path opacity="0.1" d="M19 34L31 24" stroke="#F8A362" strokeWidth="0.4" />
            </SVG>
          );
        case 'cribmd-logo':
          return (
            <>
              <SVG viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/SVG">
                <path
                  d="M9.56291 4.51639L8.22878 0.721907C8.15252 0.505024 7.84231 0.519311 7.78615 0.742293L6.22847 6.92798L4.75923 2.35419C4.69272 2.14713 4.40456 2.13721 4.32407 2.3392L3.45651 4.51639H1.29882C1.171 4.51639 1.06738 4.6204 1.06738 4.74871C1.06738 4.87702 1.171 4.98103 1.29882 4.98103H3.61321C3.70784 4.98103 3.79294 4.92319 3.82809 4.83499L4.51558 3.10971L6.03516 7.8402C6.10649 8.06224 6.42285 8.05202 6.47981 7.82584L8.04721 1.60157L9.18092 4.82603C9.21358 4.91892 9.30104 4.98103 9.39916 4.98103H11.1827C11.2718 5.18695 11.4759 5.32951 11.7135 5.32951C12.0353 5.32951 12.2921 5.06948 12.2921 4.74871C12.2921 4.4257 12.0331 4.1679 11.7135 4.1679C11.4746 4.1679 11.2715 4.31126 11.1828 4.51639H9.56291Z"
                  fill="#E8F1FE"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.54183 0.68083C7.65888 0.216011 8.30736 0.185538 8.46658 0.638394L9.7415 4.26445H11.0373C11.1873 4.05376 11.4333 3.91597 11.7136 3.91597C12.1726 3.91597 12.5442 4.28687 12.5442 4.74879C12.5442 5.2072 12.1761 5.5816 11.7136 5.5816C11.4347 5.5816 11.1878 5.44451 11.0372 5.23312H9.39922C9.19364 5.23312 9.01121 5.10302 8.94323 4.9097L8.08721 2.47503L6.72425 7.88745C6.60549 8.35903 5.94417 8.38085 5.79528 7.91735L4.49017 3.85449L4.06226 4.92836C3.98909 5.11198 3.81152 5.23312 3.61326 5.23312H1.29888C1.03097 5.23312 0.81543 5.01537 0.81543 4.74879C0.81543 4.4822 1.03097 4.26445 1.29888 4.26445H3.28571L4.09002 2.24599C4.25807 1.82427 4.86051 1.84538 4.99922 2.27719L6.19917 6.01265L7.54183 0.68083ZM11.3569 4.74886L11.414 4.88106C11.4644 4.99759 11.5796 5.07758 11.7136 5.07758C11.8947 5.07758 12.0402 4.93192 12.0402 4.74879C12.0402 4.56469 11.8937 4.41999 11.7136 4.41999C11.5789 4.41999 11.4644 4.50021 11.4141 4.61654L11.3569 4.74886Z"
                  fill="#1971F5"
                />
              </SVG>

              <SVG
                viewBox="0 0 26 29"
                className="cribmd-icon__square"
                fill="none"
                xmlns="http://www.w3.org/2000/SVG">
                <path
                  opacity="0.3"
                  d="M11.3848 4.83481L19.7435 8.37971C22.2332 9.4356 23.4358 12.1097 22.6093 14.2805L19.6497 22.0538C18.8232 24.2246 16.2019 25.277 13.7122 24.2211L5.35348 20.6763C2.86373 19.6204 1.66119 16.9463 2.48768 14.7755L5.44724 7.00212C6.27374 4.83131 8.89507 3.77892 11.3848 4.83481Z"
                  stroke="#1863CC"
                  strokeWidth="1.5"
                />
              </SVG>
            </>
          );
        default:
          return <></>;
      }
    })()}
  </Icon>
);

export default SVGIcon;

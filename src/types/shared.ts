/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributes,
  RefObject,
  BlockquoteHTMLAttributes,
  ImgHTMLAttributes
} from 'react';

export interface QandAProps {
  question: string;
  answer: string;
}

export interface ImgProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  isJPG?: boolean;
}

export interface IconProps {
  name?: SVGIconName & string;
  className?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'inherit';
}

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'tertiary';
  _type?: 'flat-button' | 'icon-button';
}

export interface AnchorProps
  extends Partial<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> {
  button?: boolean;
  variant?: 'text' | 'outlined' | 'contained' | 'contained-light';
  color?: 'primary' | 'secondary' | 'tertiary';
  _type?: 'flat-button' | 'icon-button';
  exact?: boolean;
  routeLink?: boolean;
}

export interface BoxProps
  extends Partial<
    DetailedHTMLProps<
      HTMLAttributes<HTMLElement> & BlockquoteHTMLAttributes<HTMLElement>,
      HTMLElement & HTMLParagraphElement & HTMLUListElement & HTMLLIElement
    >
  > {
  as?: BoxAs;
  _ref?: RefObject<HTMLElement & HTMLParagraphElement & HTMLUListElement & HTMLLIElement>;
  'data-anim'?: TransitionAnimName;
}

export type TransitionAnimName =
  | 'fadeIn'
  | 'fadeInUp'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'fadeInUpBig'
  | 'fadeInDownBig'
  | 'fadeInLeftBig'
  | 'fadeInRightBig'
  | 'In'
  | 'InUp'
  | 'InDown'
  | 'InLeft'
  | 'InRight'
  | 'InUpBig'
  | 'InDownBig'
  | 'InLeftBig'
  | 'InRightBig';

export type SVGIconName =
  | 'tick'
  | 'appstore-button'
  | 'playstore-button'
  | 'caret-filled-down'
  | 'caret-down'
  | 'previous'
  | 'next'
  | 'credit-card-individual'
  | 'credit-card-corporate'
  | 'volume'
  | 'cribmd-logo'
  | 'wave'
  | 'heart'
  | 'blood'
  | 'users'
  | 'girl'
  | 'eye'
  | 'cross'
  | 'smiley'
  | 'double-arrow'
  | 'arrow-top-right'
  | 'home'
  | 'mobile'
  | 'drug-container'
  | 'shield'
  | 'curved-square(blue)'
  | 'wide-rectangle(blue)'
  | 'curved-square(purple)'
  | 'wide-rectangle(purple)'
  | 'doctors-briefcase'
  | 'flower'
  | 'rectangle-slanted-right'
  | 'rectangle-slanted-left'
  | 'wavy-rectangle-sm'
  | 'wavy-rectangle-lg'
  | 'check'
  | 'activity-green'
  | 'activity-wine'
  | 'activity-beige'
  | 'svgName'
  | 'mobile-phone'
  | 'web'
  | 'clock';

export type BoxAs =
  | 'address'
  | 'nav'
  | 'header'
  | 'main'
  | 'aside'
  | 'footer'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p'
  | 'ul'
  | 'li'
  | 'section'
  | 'i'
  | 'small'
  | 'blockquote';

import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  HTMLAttributes
} from 'react';

export type SVGIconName =
  | 'credit-card-individual'
  | 'credit-card-corporate'
  | 'volume'
  | 'cribmd-logo';

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
      HTMLAttributes<HTMLElement>,
      HTMLElement & HTMLParagraphElement & HTMLUListElement & HTMLLIElement
    >
  > {
  as?: BoxAs;
}

export type BoxAs =
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
  | 'small';

/* eslint-disable react/display-name */
/*
  This file defines bare components without default Bootstrap styles that affect React-Bootstraps (grid) components like <Container>, <Row> and <Col> which change their layout behaviours which may not always be desirable.

  The hallmark of this file is the <Box> component, and the idea is to, as much as possible, stick to using components throughout app and not HTML tags for the sake of consistency and standardization: We're writing React not (just) HTML. Copy? :)

  Also, FWIW, the idea of the Box component (and the other components here) is similar to the idea of Material-UI's Box.
  I chose to not add Material-UI to this project as it would increase the size of the whole bundle, so I'm trying as much as possible to keep this project lean and so it doesn't have too many deps (dependencies)!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  ButtonHTMLAttributes,
  ImgHTMLAttributes,
  SVGProps,
  AnchorHTMLAttributes,
  useState,
  useEffect,
  forwardRef
} from 'react';

export type BoxAsType = 'div' | 'span' | 'p' | 'ul' | 'li' | 'section' | 'i';

export const Button: FC<
  {
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'primary' | 'secondary' | 'tertiary';
    _type?: 'flat-button' | 'icon-button';
  } & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, variant, color, _type, className, ...props }): JSX.Element => {
  return (
    <button
      {...props}
      className={`${_type || 'flat-button'} btn--${variant || 'text'} btn--${
        color || 'primary'
      } ${className}`.replace(/\s+/g, ' ')}>
      {children}
    </button>
  );
};

export const Anchor = forwardRef<
  HTMLAnchorElement,
  Partial<
    {
      button: boolean;
      variant: 'text' | 'outlined' | 'contained';
      color: 'primary' | 'secondary' | 'tertiary';
      _type: 'flat-button' | 'icon-button';
    } & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
  >
>(({ children, button, variant, color, _type, className, ...props }, ref): JSX.Element => {
  return (
    <a
      {...props}
      ref={ref}
      className={
        button
          ? `${_type || 'flat-button'} btn--${variant || 'text'} btn--${
              color || 'primary'
            } ${className}`.replace(/\s+/g, ' ')
          : className
      }>
      {children}
    </a>
  );
});

export const SVG: FC<DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>> = ({
  children,
  ...props
}): JSX.Element => {
  return <svg {...props}>{children}</svg>;
};

export const Img: FC<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({
  ...props
}): JSX.Element => {
  return <img {...props} alt={props.alt || 'image'} />;
};

export const Box: FC<
  {
    as?: BoxAsType;
  } & Partial<
    DetailedHTMLProps<
      HTMLAttributes<HTMLElement>,
      HTMLElement & HTMLParagraphElement & HTMLUListElement & HTMLLIElement
    >
  >
> = ({ as, children, ...props }): JSX.Element => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  //Fix for SSR error: 'Warning: Expected server HTML to contain a matching <div> in <nav>'
  if (!render) return <></>;

  switch (as) {
    case 'i':
      return <i {...props}>{children}</i>;
    case 'span':
      return <span {...props}>{children}</span>;
    case 'p':
      return <p {...props}>{children}</p>;
    case 'ul':
      return <ul {...props}>{children}</ul>;
    case 'li':
      return <li {...props}>{children}</li>;
    case 'section':
      return <section {...props}>{children}</section>;
    default:
      return <div {...props}>{children}</div>;
  }
};

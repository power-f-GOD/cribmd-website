import { FC, cloneElement, memo } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { AnchorProps } from 'src/types';

const _Anchor: FC<Omit<AnchorProps, 'exact'>> = ({
  children,
  button,
  variant,
  color,
  _type,
  href,
  className,
  routeLink,
  ...props
}): JSX.Element => {
  const anchor = (
    <a
      {...props}
      className={
        button
          ? `${_type || 'flat-button'} btn--${variant || 'text'} ${
              color || 'primary'
            } ${className}`.replace(/\s+/g, ' ')
          : className
      }>
      {children}
    </a>
  );

  return routeLink ? <Link href={href as string}>{anchor}</Link> : cloneElement(anchor, { href });
};

const _NavLink: FC<Omit<AnchorProps, 'routeLink'>> = ({
  children,
  button,
  variant,
  color,
  _type,
  href,
  exact,
  className,
  ...props
}): JSX.Element => {
  const { route } = useRouter();
  const isActive = exact ? route === href : new RegExp(href || '').test(route);

  return (
    <Link href={href as string}>
      <a
        {...props}
        className={(button
          ? `${_type || 'flat-button'} btn--${variant || 'text'} ${color || 'primary'} ${className}`
          : className || ''
        )
          .concat(isActive ? ' active' : '')
          .replace(/\s+/g, ' ')}>
        {children}
      </a>
    </Link>
  );
};

export const Anchor = memo(_Anchor);
export const NavLink = memo(_NavLink);

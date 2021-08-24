/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, memo } from 'react';
import { ButtonProps } from 'src/types';
import { SVGIcon, Anchor } from '.';

const _Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  _type,
  cta,
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={`Button ${_type || 'flat-button'} btn--${variant || 'text'} ${
        color || 'primary'
      } ${className || ''} ${cta ? 'cta-btn' : ''}`.replace(/\s+/g, ' ')}>
      {children}
    </button>
  );
};

export const PlaystoreButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Anchor
      button
      target="_blank"
      href="https://play.google.com/store/apps/details?id=cribmd.com.CribMD"
      className={`PlaystoreButton ${className || ''}`.trim()}>
      <SVGIcon name="playstore-button" />
    </Anchor>
  );
};

export const AppstoreButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Anchor
      button
      target="_blank"
      href="https://apps.apple.com/us/app/id1534919330"
      className={`AppstoreButton ${className || ''}`.trim()}>
      <SVGIcon name="appstore-button" />
    </Anchor>
  );
};

export const Button = memo(_Button);

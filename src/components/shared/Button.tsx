/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, memo } from 'react';
import { ButtonProps } from 'src/types';
import { SVGIcon } from '.';

const _Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  _type,
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      {...props}
      className={`Button ${_type || 'flat-button'} btn--${variant || 'text'} ${
        color || 'primary'
      } ${className || ''}`.replace(/\s+/g, ' ')}>
      {children}
    </button>
  );
};

export const PlaystoreButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Button className={`PlaystoreButton ${className || ''}`.trim()}>
      <SVGIcon name="playstore-button" />
    </Button>
  );
};

export const AppstoreButton: FC<{ className?: string }> = ({ className }) => {
  return (
    <Button className={`AppstoreButton ${className || ''}`.trim()}>
      <SVGIcon name="appstore-button" />
    </Button>
  );
};

export const Button = memo(_Button);

import { FC, memo } from 'react';
import { ButtonProps } from 'src/types';

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

export const Button = memo(_Button);

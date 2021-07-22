import { FC } from 'react';
import { ButtonProps } from 'src/types';

export const Button: FC<ButtonProps> = ({
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
      className={`${_type || 'flat-button'} btn--${variant || 'text'} ${color || 'primary'} ${
        className || ''
      }`.replace(/\s+/g, ' ')}>
      {children}
    </button>
  );
};

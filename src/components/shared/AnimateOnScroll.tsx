/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, cloneElement, Children } from 'react';

import { Box } from '.';
import { BoxProps } from 'src/types';
import { ColProps, ContainerProps, RowProps } from 'react-bootstrap';

export const AnimateOnScroll: FC<
  BoxProps &
    Partial<ColProps | ContainerProps | RowProps> & {
      component?: FC<any>;
      allowOverflow?: boolean;
      animDelay?: number;
    }
> = ({ children, component, className, animDelay, allowOverflow, ...props }): JSX.Element => {
  const Component = component || Box;

  return (
    <Component
      {...props}
      className={`${className} ${allowOverflow ? 'overflow-visible' : 'overflow-hidden'}`}
      data-anim_anchor>
      {Children.map(children, (child) =>
        cloneElement(child as any, {
          'data-anim_target': 'true',
          ...(animDelay ? { 'data-anim_delay': animDelay } : {})
        })
      )}
    </Component>
  );
};

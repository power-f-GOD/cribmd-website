/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, Children, CSSProperties } from 'react';

import { Box } from '.';
import { BoxProps, AnimName } from 'src/types';
import { ColProps, ContainerProps, RowProps } from 'react-bootstrap';

export const RevealOnScroll: FC<
  BoxProps &
    Partial<ColProps | ContainerProps | RowProps> &
    Partial<{
      component: FC<any>;
      allowOverflow: boolean;
      delay: number;
      animName: AnimName;
      duration: number;
      easing: string;
    }>
> = ({
  children,
  component,
  className,
  delay,
  easing,
  animName,
  duration,
  allowOverflow,
  ...props
}): JSX.Element => {
  const Component = component || Box;

  return (
    <Component
      {...props}
      className={`${className} ${allowOverflow ? 'overflow-visible' : 'overflow-clip'}`}
      data-anim_anchor>
      {Children.map(children, (_child: any, i) => {
        const newChild = { ..._child };
        const { style, ...childProps }: { style: CSSProperties; [key: string]: any } = {
          ...newChild.props,
          className: newChild.props.className || '',
          style: newChild.props.style || {}
        };

        childProps.className += ` trans__${childProps['data-anim'] || animName || 'fadeInUp'}`;
        childProps.className = childProps.className.trim();
        delete childProps['data-anim'];

        if (!childProps['data-anim_delay']) {
          style.transitionDelay = `${delay ?? (i * 0.1).toFixed(2)}s`;
        } else {
          style.transitionDelay = `${childProps['data-anim_delay']}s`;
          delete childProps['data-anim_delay'];
        }

        if (!childProps['data-anim_duration']) {
          style.transitionDuration = `${duration || 0.85}s`;
        } else {
          style.transitionDelay = `${childProps['data-anim_duration']}s`;
          delete childProps['data-anim_duration'];
        }

        if (!childProps['data-anim_ease']) {
          style.transitionTimingFunction = `${easing || 'cubic-bezier(0.5, 0, .25, 1.5)'}s`;
        } else {
          style.transitionTimingFunction = `${childProps['data-anim_ease']}s`;
          delete childProps['data-anim_ease'];
        }

        newChild.props = { ...childProps, ...(Object.keys(style).length < 1 ? {} : { style }) };

        return newChild;
      })}
    </Component>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, Children, CSSProperties, memo, useMemo, useCallback } from 'react';

import { Box } from '.';
import { BoxProps, TransitionAnimName } from 'src/types';
import { ColProps, ContainerProps, RowProps } from 'react-bootstrap';

const _RevealOnScroll: FC<
  BoxProps &
    Partial<ColProps | ContainerProps | RowProps> &
    Partial<{
      component: FC<any>;
      allowOverflow: boolean;
      delay: number;
      animName: TransitionAnimName;
      duration: number;
      easing: string;
      once: boolean;
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
  once,
  ...props
}): JSX.Element => {
  const Component = component || Box;

  return (
    <Component
      {...useMemo(() => props, [props])}
      className={`${className || ''} ${
        allowOverflow ? 'overflow-visible' : 'overflow-clip'
      }`.trim()}
      data-anim_anchor
      {...useMemo(() => (once ? { 'data-anim_once': 'true' } : {}), [once])}>
      {Children.map(
        children,
        useCallback(
          (_child: any, i) => {
            if (!_child?.props) {
              return _child;
            }

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
              style.transitionDuration = `${childProps['data-anim_duration']}s`;
              delete childProps['data-anim_duration'];
            }

            if (!childProps['data-anim_easing']) {
              style.transitionTimingFunction = `${easing || 'cubic-bezier(0.5, 0, .25, 1.5)'}`;
            } else {
              style.transitionTimingFunction = `${childProps['data-anim_easing']}`;
              delete childProps['data-anim_easing'];
            }

            newChild.props = { ...childProps, ...(Object.keys(style).length < 1 ? {} : { style }) };

            return newChild;
          },
          [animName, duration, easing, delay]
        )
      )}
    </Component>
  );
};

/**
 * @param {FC} component Component to use to render wrapper instead of `<Box>`'s default: `div`.
 * @param {boolean} allowOverflow Whether to allow wrapping component make animating child overflowing visible.
 * @param {boolean} once Whether to allow the (scroll) animation run only once.
 * @param {string} easing Animation/Transition easing/timing function
 * @param {TransitionAnimName} animName Animation name
 * @param {number} duration Animation duration
 * @param {number} delay Animation delay
 */
export const RevealOnScroll = memo(_RevealOnScroll);

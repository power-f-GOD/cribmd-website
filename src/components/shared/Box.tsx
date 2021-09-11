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
  useState,
  useEffect,
  memo,
  useRef,
  useCallback,
  useContext,
  createElement
} from 'react';
import { BoxProps } from 'src/types';
import { createIntersectionObserver, delay } from 'src/utils';
import { AppWindowContext } from 'src/pages/_app';

let observer: IntersectionObserver;

const _Box: FC<BoxProps> = ({ as, children, lazy, ...props }): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  // const [rendered, setRendered] = useState(false);
  const [shouldRecalculate, setShouldRecalculate] = useState(true);
  const [renderChildren, setRenderChildren] = useState(true);
  const mustRenderChildren = !lazy || (lazy && renderChildren);
  let elementRef = useRef<HTMLElement | null>(null);
  // const observerRef = useRef<IntersectionObserver | null>(null);

  const recalculate = useCallback(
    (element: HTMLElement) => {
      if (element.children.length || renderChildren) {
        element.style.height = 'auto';
        delay(500).then(() => {
          if (element.children.length && element) {
            element.style.height = `${element.offsetHeight}px`;
            setShouldRecalculate(false);
            // console.log(
            //   'DDDD',
            //   element.children.length,
            //   element?.className,
            //   element?.style.height,
            //   '...',
            //   elementRef.current?.style.height,
            //   renderChildren
            // );
          }
        });
      }
    },
    [renderChildren]
  );

  // useEffect(() => {
  //   setRendered(true);
  // }, []);

  useEffect(() => {
    if (lazy) {
      setShouldRecalculate(!!windowWidth);
    }
  }, [windowWidth, lazy]);

  useEffect(() => {
    if (lazy) {
      const element = elementRef.current;

      if (element && (shouldRecalculate || !element.style.height) && renderChildren) {
        recalculate(element);
      }
    }
  }, [lazy, renderChildren, shouldRecalculate, recalculate]);

  useEffect(() => {
    if (lazy) {
      delay(25).then(() => {
        const element = elementRef.current;

        observer = createIntersectionObserver(
          null,
          (entries) => {
            entries.forEach((entry) => {
              setRenderChildren(entry.isIntersecting);
            });
          },
          { threshold: 0 }
        );

        if (element) {
          observer.observe(element);
        }
      });
    }
  }, [lazy]);

  if (props._ref) {
    props.ref = elementRef = props._ref;
    delete props._ref;
  } else if (lazy && !props.ref) {
    props.ref = elementRef as any;
  }

  if (lazy && !props.style?.minHeight) {
    props.style = {
      ...(props.style || {}),
      minHeight: 75,
      opacity: renderChildren ? 1 : 0,
      transitionProperty: 'opacity, transform',
      transitionDuration: '0.5s'
    };
  }

  //Fix for SSR error: 'Warning: Expected server HTML to contain a matching <div> in <nav>'
  // if (typeof window !== 'undefined') return <></>;

  return createElement(as || 'div', {
    ...props,
    children: mustRenderChildren && children
  });
};

export const Box = memo(_Box);

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

const _Box: FC<BoxProps> = ({ as, children, component, ...props }): JSX.Element => {
  const Component = component;
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);

    return () => setRendered(false);
  }, []);

  if (props._ref) {
    props.ref = props._ref;
    delete props._ref;
  }

  //Fix for SSR error: 'Warning: Expected server HTML to contain a matching <div> in <nav>'
  if (typeof window === 'undefined' || !rendered) return <></>;

  if (Component) {
    return <Component {...props}>{children}</Component>;
  }

  return createElement(as || 'div', {
    ...props,
    children
  });
};

let observer: IntersectionObserver;

const _LazyBox: FC<BoxProps> = ({ as, children, component, ...props }): JSX.Element => {
  const Component = component;
  const windowWidth = useContext(AppWindowContext);
  const [rendered, setRendered] = useState(false);
  const [shouldRecalculate, setShouldRecalculate] = useState(true);
  const [renderChildren, setRenderChildren] = useState(!true);
  let elementRef = useRef<HTMLElement | null>(null);

  const recalculate = useCallback(
    (element: HTMLElement) => {
      const numChildren = element.children.length;

      if (numChildren || renderChildren) {
        element.style.height = 'auto';
        delay(windowWidth < 768 ? 200 : 100).then(() => {
          if (element && element.children.length) {
            element.style.height = `${element.offsetHeight}px`;
            setShouldRecalculate(false);
          }
        });
      }
    },
    [renderChildren, windowWidth]
  );

  useEffect(() => {
    setRendered(true);
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

    return () => setRendered(false);
  }, []);

  useEffect(() => {
    if (!isNaN(windowWidth)) {
      setShouldRecalculate(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (renderChildren) {
      delay(50).then(() => {
        const element = elementRef.current;

        if (
          element &&
          (shouldRecalculate || !element.style.height || element.style.height === 'auto')
        ) {
          recalculate(element);
        }
      });
    }
  }, [renderChildren, shouldRecalculate, recalculate]);

  if (props._ref) {
    props.ref = elementRef = props._ref;
    delete props._ref;
  } else if (!props.ref) {
    props.ref = elementRef as any;
  }

  if (!props.style?.minHeight && rendered) {
    props.style = {
      ...(props.style || {}),
      opacity: renderChildren ? 1 : 0,
      transitionProperty: 'opacity, transform',
      transitionDuration: '0.5s'
    };
  }

  //Fix for SSR error: 'Warning: Expected server HTML to contain a matching <div> in <nav>'
  if (typeof window === 'undefined' || !rendered) return <></>;

  if (Component) {
    return <Component {...props}>{renderChildren && children}</Component>;
  }

  return createElement(as || 'div', {
    ...props,
    children: renderChildren && children
  });
};

export const Box = memo(_Box);
export const LazyBox = memo(_LazyBox);

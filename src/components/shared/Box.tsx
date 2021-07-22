/* eslint-disable react/display-name */
/*
  This file defines bare components without default Bootstrap styles that affect React-Bootstraps (grid) components like <Container>, <Row> and <Col> which change their layout behaviours which may not always be desirable.

  The hallmark of this file is the <Box> component, and the idea is to, as much as possible, stick to using components throughout app and not HTML tags for the sake of consistency and standardization: We're writing React not (just) HTML. Copy? :)

  Also, FWIW, the idea of the Box component (and the other components here) is similar to the idea of Material-UI's Box.
  I chose to not add Material-UI to this project as it would increase the size of the whole bundle, so I'm trying as much as possible to keep this project lean and so it doesn't have too many deps (dependencies)!
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect, memo } from 'react';
import { BoxProps } from 'src/types';

const _Box: FC<BoxProps> = ({ as, children, ...props }): JSX.Element => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  if (props._ref) {
    props.ref = props._ref;
    delete props._ref;
  }

  //Fix for SSR error: 'Warning: Expected server HTML to contain a matching <div> in <nav>'
  if (!render) return <></>;

  switch (as) {
    case 'h1':
      return <h1 {...props}>{children}</h1>;
    case 'h2':
      return <h2 {...props}>{children}</h2>;
    case 'h3':
      return <h3 {...props}>{children}</h3>;
    case 'h4':
      return <h4 {...props}>{children}</h4>;
    case 'h5':
      return <h5 {...props}>{children}</h5>;
    case 'h6':
      return <h6 {...props}>{children}</h6>;
    case 'nav':
      return <nav {...props}>{children}</nav>;
    case 'header':
      return <header {...props}>{children}</header>;
    case 'main':
      return <main {...props}>{children}</main>;
    case 'aside':
      return <aside {...props}>{children}</aside>;
    case 'footer':
      return <footer {...props}>{children}</footer>;
    case 'i':
      return <i {...props}>{children}</i>;
    case 'small':
      return <small {...props}>{children}</small>;
    case 'span':
      return <span {...props}>{children}</span>;
    case 'p':
      return <p {...props}>{children}</p>;
    case 'ul':
      return <ul {...props}>{children}</ul>;
    case 'li':
      return <li {...props}>{children}</li>;
    case 'section':
      return <section {...props}>{children}</section>;
    default:
      return <div {...props}>{children}</div>;
  }
};

export const Box = memo(_Box);

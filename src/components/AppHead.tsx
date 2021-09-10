// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  useEffect(() => {
    hotjar.initialize(2596802, 6);
    ReactGA.initialize('UA-205113192-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Head>
      <title>CribMD | {title || 'Home'}</title>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    </Head>
  );
};

export default AppHead;

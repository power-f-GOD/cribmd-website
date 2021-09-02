// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';
import { useEffect } from 'react';
// import TagManager from 'react-gtm-module';
import ReactGA from 'react-ga';

// const tagManagerArgs = {
//   gtmId: 'UA-205113192-1',
//   dataLayer: {
//     js: new Date(),
//     config: 'UA-205113192-1'
//   }
// };

// TagManager.initialize(tagManagerArgs);

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  useEffect(() => {
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

// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

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
    TagManager.initialize({ gtmId: 'UA-205113192-1' });
  }, []);

  return (
    <Head>
      <title>CribMD | {title || 'Home'}</title>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    </Head>
  );
};

export default AppHead;

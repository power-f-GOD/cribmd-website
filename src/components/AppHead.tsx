// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  return (
    <Head>
      <title>CribMD | {title || 'Home'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default AppHead;

// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  return (
    <Head>
      <title>CribMD | {title || 'Home'}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default AppHead;

import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'src/styles/app.scss';
import { AppNav, AppFooter } from 'src/components';
import Head from 'next/head';

export const AppContext = createContext<{ windowWidth: number }>({
  windowWidth: globalThis.innerWidth
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(globalThis.innerWidth);
  const appContextValue = useMemo(
    () => ({
      windowWidth
    }),
    [windowWidth]
  );

  useEffect(() => {
    let throttle: NodeJS.Timeout;

    globalThis.onresize = () => {
      clearTimeout(throttle);
      throttle = setTimeout(() => {
        setWindowWidth(globalThis.innerWidth);
      }, 250);
    };
  }, []);
  console.log('APPPP RENDERS OH NO');
  return (
    <AppContext.Provider value={appContextValue}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppNav />
      <Component {...pageProps} />
      <AppFooter />
    </AppContext.Provider>
  );
};

export default App;

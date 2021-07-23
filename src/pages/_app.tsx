import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'src/styles/app.scss';
import { AppNav } from 'src/components';
import { throttle } from 'src/utils';

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
    let _throttle: NodeJS.Timeout;

    globalThis.onresize = () => {
      clearTimeout(_throttle);
      _throttle = throttle(() => {
        setWindowWidth(globalThis.innerWidth);
      }, 250);
    };
  }, []);

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
      {/* <AppFooter /> */}
    </AppContext.Provider>
  );
};

export default App;

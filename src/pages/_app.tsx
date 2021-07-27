import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'src/styles/app.scss';
import { AppNav } from 'src/components';
import { throttle } from 'src/utils';

export const AppContext = createContext({});
export const AppWindowContext = createContext<number>(globalThis.innerWidth);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(globalThis.innerWidth);
  const appContextValue = useMemo(() => ({}), []);

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
      <AppWindowContext.Provider value={windowWidth}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800&amp;display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap-grid.min.css"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap-utilities.min.css"
            rel="stylesheet"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppNav />
        <Component {...pageProps} />
        {/* <AppFooter /> */}
      </AppWindowContext.Provider>
    </AppContext.Provider>
  );
};

export default App;

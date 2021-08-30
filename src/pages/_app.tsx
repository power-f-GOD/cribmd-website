/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'src/styles/app.scss';
import { AppNav, AppFooter } from 'src/components';
import { throttle, delay } from 'src/utils';

export const AppContext = createContext({});
export const AppWindowContext = createContext<number>(globalThis.innerWidth);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const _window = globalThis || window;
  const [windowWidth, setWindowWidth] = useState(_window.innerWidth);
  const appContextValue = useMemo(() => ({}), []);
  const pathname = _window.location?.pathname;

  useEffect(() => {
    let _throttle: NodeJS.Timeout;

    globalThis.onresize = () => {
      clearTimeout(_throttle);
      _throttle = throttle(() => {
        setWindowWidth(globalThis.innerWidth);
      }, 250);
    };
  }, []);

  if (/^\/(patient|doctor|corp|dashboard)/.test(pathname)) {
    delay(25).then(() => {
      const div = document.querySelector('#__next > div');
      const text = 'Redirecting you to the Web App @ app.cribmd.com ...';

      if (div) {
        div.innerHTML = `<div style="display: flex;color: royalblue; align-items: center; padding: 2em; justify-content: center">${text}</div>`;
      } else {
        document.body.innerHTML = text;
      }

      delay(1000).then(() => (_window.location.href = `https://app.cribmd.com${pathname}`));
    });
  }

  return (
    <AppContext.Provider value={appContextValue}>
      <AppWindowContext.Provider value={windowWidth}>
        <Head>
          <meta
            name="description"
            content="Author: CribMD Telemedicine and Doctor Home Visit, Desc: We are a technology company that offers low cost medical services from online to door-step outreach."
          />
          <meta
            name="keywords"
            content="Telemedicine, Doctor, Home Visit, Technology, Medical services, door-step outreach, video call, Pharmacy, prescriptions, Consultation, Healthcare, health, medication, health plan, COVID"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <AppFooter />
      </AppWindowContext.Provider>
    </AppContext.Provider>
  );
};

export default App;

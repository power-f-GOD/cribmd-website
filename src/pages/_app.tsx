/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
      }, 200);
    };
    globalThis.document.querySelector('html')!.lang = 'en-UK';
    delay(100).then(() => {
      globalThis.document.querySelector('head')!.insertAdjacentHTML(
        'afterbegin',
        `
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
    `
      );
    });
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
            content="telemedicine, doctor home visit, technology in health, medical services, door-step outreach, video call,pharmacy in nigeria, health prescriptions, health consultation, healthcare in nigeria, healthcare assistant, medication, health plan, COVID, telemedicine in nigeria, doctors in nigeria, telemedicine app, cribmd website, cribmd app, cribmd plans, cribmd login, cribmd reviews,reliance hmo plans, reliance hmo app, reliance hmo login, reliance hmo reviews, dermatology, pediatrics, general practice, gynecology, optometry, family medicine, endocrinology, cardiology"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

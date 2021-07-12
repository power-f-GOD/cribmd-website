import { createContext, useState, useEffect, useMemo } from 'react';
import { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap-utilities.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'src/styles/app.scss';

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

  return (
    <AppContext.Provider value={appContextValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default App;

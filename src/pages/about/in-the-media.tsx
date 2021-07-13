import { NextPage } from 'next';

import { AppHead } from 'src/components';
import { Header, Main } from 'src/components/pages/about/in-the-media';

const InTheMedia: NextPage = () => {
  return (
    <div className="InTheMedia">
      <AppHead title="About Us - In the Media" />
      <h1>Welcome to the About/InTheMedia page!</h1>
      <Header />
      <Main />
    </div>
  );
};

export default InTheMedia;

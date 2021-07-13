import { NextPage } from 'next';

import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/health-plans/corporate';

const Corporate: NextPage = () => {
  return (
    <div className="Corporate">
      <AppHead title="Plans - Corporate" />
      <h1>Welcome to the CorporatePlan page!</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Corporate;

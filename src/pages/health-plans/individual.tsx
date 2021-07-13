import { NextPage } from 'next';

import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/health-plans/individual';

const Individual: NextPage = () => {
  return (
    <div className="Individual">
      <AppHead title="Plans - Individual" />
      <h1>Welcome to the IndividualPlan page!</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Individual;
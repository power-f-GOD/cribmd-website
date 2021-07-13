import { NextPage } from 'next';

import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/about/our-company';

const OurCompany: NextPage = () => {
  return (
    <div className="OurCompany">
      <AppHead title="About Us - Our Company" />
      <h1>Welcome to the About/OurCompany page!</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default OurCompany;

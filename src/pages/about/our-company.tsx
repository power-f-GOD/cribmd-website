import { NextPage } from 'next';

import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/about/our-company';

const OurCompany: NextPage = () => {
  return (
    <div className="">
      <AppHead title="About Us - Our Company" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default OurCompany;

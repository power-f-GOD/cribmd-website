import { NextPage } from 'next';

import Header from './_Header';
import Footer from './_Footer';
import Main from './_Main';
import { AppHead } from 'src/components';

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

import { NextPage } from 'next';

import { AppHead, Box } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/about/our-company';

const OurCompany: NextPage = () => {
  return (
    <>
      <AppHead title="About Us - Our Company" />

      <Box as="main" className="OurCompany">
        <Header />
        <Main />
        <Footer />
      </Box>
    </>
  );
};

export default OurCompany;

import { NextPage } from 'next';

import { AppHead, Box } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/home';

const Home: NextPage = () => {
  return (
    <>
      <AppHead title="Telemedicine &amp; Doctor Home Visit" />

      <Box as="main" className="Home">
        <Header />
        <Main />
        <Footer />
      </Box>
    </>
  );
};

export default Home;

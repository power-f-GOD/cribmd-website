import { NextPage } from 'next';

import Header from './_Header';
import Main from './_Main';
import Footer from './_Footer';
import { AppHead } from 'src/components';

const FAQ: NextPage = () => {
  return (
    <div className="FAQ">
      <AppHead title="FAQ" />
      <h1>Welcome to the FAQ page!</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default FAQ;

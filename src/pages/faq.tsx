import { NextPage } from 'next';

import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/faq';

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

import { NextPage } from 'next';

import { AppHead } from 'src/components';
import Header from './_Header';
import Main from './_Main';
import Footer from './_Footer';

import S from 'src/styles/pages/index/index.module.scss';

const Index: NextPage = () => {
  return (
    <div className="Index">
      <AppHead title="Telemedicine &amp; Doctor Home Visit" />
      <h1 className={S.h1}>This is the Index page</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Index;

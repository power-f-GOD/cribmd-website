import { NextPage } from 'next';

import S from 'src/styles/pages/index/index.module.scss';
import { AppNav } from 'src/components';
import Header from './_Header';
import Main from './_Main';
import Footer from './_Footer';

const Index: NextPage = () => {
  return (
    <>
      <AppNav />
      <h1 className={S.h1}>This is the Index page</h1>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Index;

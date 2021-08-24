import { memo, useContext } from 'react';
import { Container } from 'react-bootstrap';

import { AppWindowContext } from 'src/pages/_app';
import MainArticles from './Main.Articles';
import MainBroadcasts from './Main.Broadcasts';

let carouselChunkSize = 4;

const MainInTheNews = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  switch (true) {
    case windowWidth < 576:
      carouselChunkSize = 1;
      break;
    case windowWidth < 992:
      carouselChunkSize = 2;
      break;
    case windowWidth < 1200:
      carouselChunkSize = 3;
      break;
    default:
      carouselChunkSize = 4;
  }

  return (
    <Container as="main" className="my-5" fluid>
      <MainBroadcasts carouselChunkSize={carouselChunkSize} />
      <MainArticles carouselChunkSize={carouselChunkSize} />
    </Container>
  );
};

export default memo(MainInTheNews);

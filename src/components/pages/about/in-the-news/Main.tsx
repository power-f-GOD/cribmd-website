import { memo, useState, useCallback, useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img, RevealOnScroll, Anchor, Button, SVGIcon } from 'src/components';
import { GetImage, interval } from 'src/utils';
import S from 'src/styles/pages/about/in-the-news/Main.module.scss';
import { news } from './data';
import { AppWindowContext } from 'src/pages/_app';

const articles = news.filter((story) => !story.iframeUrl);
const videos = news.filter((story) => !!story.iframeUrl);
let unmounted = false;

const MainInTheNews = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  let chunk = 4;
  const [activeVideosIndex, setActiveVideosIndex] = useState(0);
  const [activeArticlesIndex, setActiveArticlesIndex] = useState(0);

  switch (true) {
    case windowWidth < 576:
      chunk = 1;
      break;
    case windowWidth < 992:
      chunk = 2;
      break;
    case windowWidth < 1200:
      chunk = 3;
      break;
    default:
      chunk = 4;
  }

  const handleVideosIndexToggle = useCallback(
    (step: 'next' | 'prev') => () => {
      setActiveVideosIndex((prev) => {
        if (step === 'next') {
          return prev === Math.ceil(videos.length / chunk) - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? Math.ceil(videos.length / chunk) - 1 : prev - 1;
      });
    },
    [chunk]
  );

  const handleArticlesIndexToggle = useCallback(
    (step: 'next' | 'prev') => () => {
      setActiveArticlesIndex((prev) => {
        if (step === 'next') {
          return prev === Math.ceil(articles.length / chunk) - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? Math.ceil(articles.length / chunk) - 1 : prev - 1;
      });
    },
    [chunk]
  );

  useEffect(() => {
    unmounted = false;
    interval(handleArticlesIndexToggle('next'), chunk * 3000, () => unmounted);

    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line
  }, [chunk]);

  return (
    <Container as="main" className="my-5" fluid>
      <RevealOnScroll easing="ease">
        <Container as="h2" className="text-md-center">
          Broadcasts
        </Container>
      </RevealOnScroll>
      <Container as="section" className={`${S.mediaGridWrapper} text-center`}>
        <Box
          className={`${S.mediaGrid} mb-3`}
          style={{
            transform: `translateX(calc(${-activeVideosIndex * 100}%))`
          }}>
          {videos.map(({ caption, rider, imageName, iframeUrl, anchorHref }, i) => {
            const inActiveRange = !(
              i >= (activeVideosIndex + 1) * chunk || i < activeVideosIndex * chunk
            );

            return (
              <Box
                key={i}
                className={`${S.mediaItemContainer}`}
                style={{
                  transform: `translateY(${inActiveRange ? 0 : '3em'}) scale(${
                    !inActiveRange ? '0.75' : '1'
                  })`,
                  opacity: inActiveRange ? 1 : 0.5,
                  transitionDelay: inActiveRange ? `${(i % chunk) * 0.1}s` : undefined
                }}>
                <Box className={`${S.mediaImageContainer} __grid-item d-flex align-items-center`}>
                  {imageName ? (
                    <Img src={GetImage.mediaLogo(imageName)} />
                  ) : (
                    <iframe
                      src={iframeUrl}
                      title={rider}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </Box>
                <Box className={S.mediaContentContainer}>
                  <Box as="h6"> {caption}</Box>
                  <Anchor href={anchorHref}>{rider}</Anchor>
                </Box>
              </Box>
            );
          })}
        </Box>

        <RevealOnScroll allowOverflow className="mt-3 mt-md-4 justify-content-center p-3 mb-5">
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              className={S.toggleButton}
              onClick={handleVideosIndexToggle('prev')}>
              <SVGIcon name="previous" />
            </Button>
          </Box>
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              color="primary"
              className={S.toggleButton}
              onClick={handleVideosIndexToggle('next')}>
              <SVGIcon name="next" />
            </Button>
          </Box>
        </RevealOnScroll>
      </Container>

      <RevealOnScroll easing="ease">
        <Container as="h2" className="text-md-center">
          Articles
        </Container>
      </RevealOnScroll>
      <Container as="section" className={`${S.mediaGridWrapper} text-center`}>
        <Box
          className={`${S.mediaGrid} mb-3`}
          style={{
            transform: `translateX(calc(${-activeArticlesIndex * 100}%))`
          }}>
          {articles.map(({ caption, rider, imageName, iframeUrl, anchorHref }, i) => {
            const inActiveRange = !(
              i >= (activeArticlesIndex + 1) * chunk || i < activeArticlesIndex * chunk
            );

            return (
              <Box
                key={i}
                className={`${S.mediaItemContainer}`}
                style={{
                  transform: `translateY(${inActiveRange ? 0 : '3em'}) scale(${
                    !inActiveRange ? '0.75' : '1'
                  })`,
                  opacity: inActiveRange ? 1 : 0.5,
                  transitionDelay: inActiveRange ? `${(i % chunk) * 0.1}s` : undefined
                }}>
                <Box
                  className={`${S.mediaImageContainer} __grid-item d-flex align-items-center`}
                  style={{ height: '6em' }}>
                  {imageName ? (
                    <Img src={GetImage.mediaLogo(imageName)} />
                  ) : (
                    <iframe
                      src={iframeUrl}
                      title={rider}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </Box>
                <Box className={S.mediaContentContainer}>
                  <Box as="h6"> {caption}</Box>
                  <Anchor href={anchorHref}>{rider}</Anchor>
                </Box>
              </Box>
            );
          })}
        </Box>

        <RevealOnScroll allowOverflow className="mt-3 mt-md-4 justify-content-center p-3 mb-5">
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              className={S.toggleButton}
              onClick={handleArticlesIndexToggle('prev')}>
              <SVGIcon name="previous" />
            </Button>
          </Box>
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              color="primary"
              className={S.toggleButton}
              onClick={handleArticlesIndexToggle('next')}>
              <SVGIcon name="next" />
            </Button>
          </Box>
        </RevealOnScroll>
      </Container>
    </Container>
  );
};

export default memo(MainInTheNews);

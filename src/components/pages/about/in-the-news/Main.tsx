import { Container } from 'react-bootstrap';
import { Box, Img, RevealOnScroll, Anchor } from 'src/components';
import { memo } from 'react';
import { GetImage } from 'src/utils';
import S from 'src/styles/pages/about/in-the-news/Main.module.scss';
import { news } from './data';

// let unmounted = false;
const articles = news.filter((story) => !story.iframeUrl);
const videos = news.filter((story) => !!story.iframeUrl);

const MainInTheNews = (): JSX.Element => {
  // const [activeMediaIndex, setActiveMediaIndex] = useState(3);

  // const handleMediaToggle = useCallback(
  //   (step: 'next' | 'prev') => () => {
  //     setActiveMediaIndex((prev) => {
  //       if (step === 'next') {
  //         return prev === mediaItems.length - 1 ? 0 : prev + 1;
  //       }

  //       return prev === 0 ? mediaItems.length - 1 : prev - 1;
  //     });
  //   },
  //   []
  // );

  // useEffect(() => {
  //   interval(handleMediaToggle('next'), 5000, () => unmounted);

  //   return () => {
  //     unmounted = true;
  //   };
  // }, [handleMediaToggle]);

  return (
    <Container as="main" className="my-5" fluid>
      <Container as="section">
        <Container className={`${S.mediaGridWrapper} text-center`}>
          <Box className={`${S.mediaGrid} mb-3`}>
            {videos.map(({ caption, rider, imageName, iframeUrl, anchorHref }) => {
              return (
                <RevealOnScroll key={caption} className={`${S.mediaItemContainer}`} easing="ease">
                  <Box className={`${S.mediaImageContainer} __grid-item d-flex align-items-center`}>
                    {imageName ? (
                      <Img src={GetImage.mediaLogo(imageName)} />
                    ) : (
                      <iframe
                        src={iframeUrl}
                        title={rider}
                        // width="300"
                        // height="260"
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
                </RevealOnScroll>
              );
            })}
          </Box>

          <Box className={S.mediaGrid}>
            {articles.map(({ caption, rider, imageName, iframeUrl, anchorHref }) => {
              return (
                <RevealOnScroll
                  key={caption}
                  className={`${S.mediaItemContainer}`}
                  animName="fadeInLeft"
                  easing="ease">
                  <Box
                    className={`${S.mediaImageContainer} __grid-item d-flex align-items-center`}
                    style={{ height: '6em' }}>
                    {imageName ? (
                      <Img src={GetImage.mediaLogo(imageName)} />
                    ) : (
                      <iframe
                        src={iframeUrl}
                        title={rider}
                        // width="300"
                        // height="260"
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
                </RevealOnScroll>
              );
            })}
          </Box>

          {/* <RevealOnScroll allowOverflow className="mt-3 mt-md-4 justify-content-center p-3">
            <Box as="span" className="d-inline-block">
              <Button
                _type="icon-button"
                className={S.toggleButton}
                onClick={handleMediaToggle('prev')}>
                <SVGIcon name="previous" />
              </Button>
            </Box>
            <Box as="span" className="d-inline-block">
              <Button
                _type="icon-button"
                color="primary"
                className={S.toggleButton}
                onClick={handleMediaToggle('next')}>
                <SVGIcon name="next" />
              </Button>
            </Box>
          </RevealOnScroll> */}
        </Container>
      </Container>
    </Container>
  );
};

export default memo(MainInTheNews);

import { memo, useState, useCallback, FC } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img, RevealOnScroll, Anchor, Button, SVGIcon } from 'src/components';
import { GetImage } from 'src/utils';
import S from 'src/styles/pages/about/in-the-news/Main.module.scss';
import { news } from 'src/data/about/in-the-news';

const videos = news.filter((story) => !!story.iframeUrl);

const MainBroadcasts: FC<{ carouselChunkSize: number; windowWidth?: number }> = ({
  carouselChunkSize
}) => {
  const [activeVideosIndex, setActiveVideosIndex] = useState(0);

  const handleVideosIndexToggle = useCallback(
    (step: 'next' | 'prev') => () => {
      setActiveVideosIndex((prev) => {
        if (step === 'next') {
          return prev === Math.ceil(videos.length / carouselChunkSize) - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? Math.ceil(videos.length / carouselChunkSize) - 1 : prev - 1;
      });
    },
    [carouselChunkSize]
  );

  return (
    <>
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
              i >= (activeVideosIndex + 1) * carouselChunkSize ||
              i < activeVideosIndex * carouselChunkSize
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
                  transitionDelay: inActiveRange ? `${(i % carouselChunkSize) * 0.1}s` : undefined
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
                  <Anchor href={anchorHref} target="_blank">
                    {rider}
                  </Anchor>
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
    </>
  );
};

export default memo(MainBroadcasts);
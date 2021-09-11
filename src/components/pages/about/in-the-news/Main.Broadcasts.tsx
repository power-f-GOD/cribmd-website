import { memo, useState, useCallback, FC, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import { Box, RevealOnScroll, Anchor, Button, SVGIcon } from 'src/components';
import S from 'src/styles/pages/about/in-the-news/Main.module.scss';
import { news } from 'src/data/about/in-the-news';

const videos = news.filter((story) => !!story.iframeUrl);

const MainBroadcasts: FC<{ carouselChunkSize: number; windowWidth?: number }> = ({
  carouselChunkSize
}) => {
  const [activeVideosIndex, setActiveVideosIndex] = useState(0);

  const handleVideosIndexToggle = useCallback(
    (step: 'next' | 'previous') => () => {
      setActiveVideosIndex((prev) => {
        if (step === 'next') {
          return prev === Math.ceil(videos.length / carouselChunkSize) - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? Math.ceil(videos.length / carouselChunkSize) - 1 : prev - 1;
      });
    },
    [carouselChunkSize]
  );

  const handleNextVideoToggle = useCallback(() => {
    handleVideosIndexToggle('next')();
  }, [handleVideosIndexToggle]);

  const handlePreviousVideoToggle = useCallback(() => {
    handleVideosIndexToggle('previous')();
  }, [handleVideosIndexToggle]);

  return (
    <>
      <RevealOnScroll easing="ease">
        <Container as="h2" className="text-md-center">
          Broadcasts
        </Container>
      </RevealOnScroll>

      <Box lazy as="section" className={`${S.mediaGridWrapper} text-center container mb-5`}>
        <Box
          className={`${S.mediaGrid} mb-3`}
          style={useMemo(
            () => ({
              transform: `translateX(calc(${-activeVideosIndex * 100}%))`
            }),
            [activeVideosIndex]
          )}>
          {useMemo(() => videos, []).map(
            useCallback(
              ({ caption, rider, iframeUrl, anchorHref }, i) => {
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
                      opacity: inActiveRange ? 1 : 0,
                      pointerEvents: inActiveRange ? 'unset' : 'none',
                      transitionDelay: inActiveRange
                        ? `${(i % carouselChunkSize) * 0.1}s`
                        : undefined
                    }}
                    aria-hidden={!inActiveRange}>
                    <Box
                      className={`${S.mediaImageContainer} __grid-item d-flex align-items-center`}>
                      <iframe
                        src={iframeUrl}
                        title={rider}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Box>
                    <Box className={S.mediaContentContainer}>
                      <Box as="strong" className="h6">
                        {' '}
                        {caption}
                      </Box>
                      <Anchor
                        href={anchorHref}
                        target="_blank"
                        tabIndex={inActiveRange ? 0 : -1}
                        rel="noopener"
                        aria-hidden={!inActiveRange}>
                        {rider}
                      </Anchor>
                    </Box>
                  </Box>
                );
              },
              [activeVideosIndex, carouselChunkSize]
            )
          )}
        </Box>

        <RevealOnScroll allowOverflow className="mt-3 mt-md-4 justify-content-center p-3 mb-5">
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              className={S.toggleButton}
              onClick={handlePreviousVideoToggle}>
              <SVGIcon name="previous" />
            </Button>
          </Box>
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              color="primary"
              className={S.toggleButton}
              onClick={handleNextVideoToggle}>
              <SVGIcon name="next" />
            </Button>
          </Box>
        </RevealOnScroll>
      </Box>
    </>
  );
};

export default memo(MainBroadcasts);

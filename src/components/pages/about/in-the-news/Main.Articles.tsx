/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, useState, useCallback, FC, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img, RevealOnScroll, Anchor, Button, SVGIcon } from 'src/components';
import { GetImage, interval, delay } from 'src/utils';
import S from 'src/styles/pages/about/in-the-news/Main.module.scss';
import { news } from 'src/data/about/in-the-news';

const articles = news.filter((story) => !story.iframeUrl);
let unmounted = false;

const MainArticles: FC<{ carouselChunkSize: number; windowWidth?: number }> = ({
  carouselChunkSize
}) => {
  const [activeArticlesIndex, setActiveArticlesIndex] = useState(0);

  const handleArticlesIndexToggle = useCallback(
    (step: 'next' | 'previous') => async () => {
      const slide = () => {
        if (unmounted) return;

        setActiveArticlesIndex((prev) => {
          if (step === 'next') {
            return prev === Math.ceil(articles.length / carouselChunkSize) - 1 ? 0 : prev + 1;
          }

          return prev === 0 ? Math.ceil(articles.length / carouselChunkSize) - 1 : prev - 1;
        });
      };

      unmounted = true;
      await delay(100);
      unmounted = false;
      slide();
      interval(slide, 5000, () => unmounted);
    },
    [carouselChunkSize]
  );

  const handleNextArticleToggle = useCallback(() => {
    handleArticlesIndexToggle('next')();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePreviousArticleToggle = useCallback(() => {
    handleArticlesIndexToggle('previous')();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleNextArticleToggle();

    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <RevealOnScroll easing="ease">
        <Container as="h2" className="text-md-center" id="articles">
          Articles
        </Container>
      </RevealOnScroll>

      <Container as="section" className={`${S.mediaGridWrapper} text-center`}>
        <Box
          className={`${S.mediaGrid} mb-3`}
          style={useMemo(
            () => ({
              transform: `translateX(calc(${-activeArticlesIndex * 100}%))`
            }),
            [activeArticlesIndex]
          )}>
          {useMemo(() => articles, []).map(
            useCallback(
              ({ caption, rider, imageName, iframeUrl, anchorHref }, i) => {
                const inActiveRange = !(
                  i >= (activeArticlesIndex + 1) * carouselChunkSize ||
                  i < activeArticlesIndex * carouselChunkSize
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
                      transitionDelay: inActiveRange
                        ? `${(i % carouselChunkSize) * 0.1}s`
                        : undefined
                    }}
                    aria-hidden={!inActiveRange}>
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
                      <Anchor
                        {...(inActiveRange ? { href: anchorHref } : {})}
                        target="_blank"
                        tabIndex={inActiveRange ? 0 : -1}>
                        {rider}
                      </Anchor>
                    </Box>
                  </Box>
                );
              },
              [activeArticlesIndex, carouselChunkSize]
            )
          )}
        </Box>

        <RevealOnScroll allowOverflow className="mt-3 mt-md-4 justify-content-center p-3 mb-5">
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              className={S.toggleButton}
              onClick={handlePreviousArticleToggle}>
              <SVGIcon name="previous" />
            </Button>
          </Box>
          <Box as="span" className="d-inline-block">
            <Button
              _type="icon-button"
              color="primary"
              className={S.toggleButton}
              onClick={handleNextArticleToggle}>
              <SVGIcon name="next" />
            </Button>
          </Box>
        </RevealOnScroll>
      </Container>
    </>
  );
};

export default memo(MainArticles);

import { Container } from 'react-bootstrap';
import { Box, Img, RevealOnScroll, SVGIcon, Button } from 'src/components/shared';
import { useState, useCallback, useEffect } from 'react';
import { GetImage, interval } from 'src/utils';
import S from 'src/styles/pages/about/in-the-media/Main.module.scss';
import { mediaItems } from './data';

const Main = (): JSX.Element => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(3);

  let unmounted = false;

  const handleMediaToggle = useCallback(
    (step: 'next' | 'prev') => () => {
      setActiveMediaIndex((prev) => {
        if (step === 'next') {
          return prev === mediaItems.length - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? mediaItems.length - 1 : prev - 1;
      });
    },
    []
  );

  useEffect(() => {
    interval(handleMediaToggle('next'), 5000, () => unmounted);

    return () => {
      unmounted = true;
    };
  }, [handleMediaToggle]);

  return (
    <Container as="main" className="my-5" fluid>
      <RevealOnScroll component={Container}>
        <Box as="h2" className="h4 text-md-center">
          CribMD on the News
        </Box>
      </RevealOnScroll>

      <Container className={`${S.mediaGridWrapper} text-center`}>
        <Box
          className={S.mediaGrid}
          style={{
            transform: `translateX(-${activeMediaIndex * 8}rem)`
          }}>
          {mediaItems.map(({ header, content, imageName }) => {
            return (
              <Box key={header} className={`${S.mediaItemContainer} `}>
                <Box
                  className={`${S.mediaImageContainer} __grid-item d-flex align-items-center p-3 px-sm-4 px-md-5 py-sm-4`}>
                  <Img src={GetImage.partnerLogo(imageName)} />
                </Box>
                <Box className={S.mediaContentContainer}>
                  <Box as="h6"> {header}</Box>
                  <Box as="p"> {content}</Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <RevealOnScroll allowOverflow className="mt-3 mt-md-4 justify-content-center p-3">
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
        </RevealOnScroll>
      </Container>

      <RevealOnScroll component={Container}>
        <Box as="h2" className="h5 text-md-center">
          Gallery
        </Box>
      </RevealOnScroll>
    </Container>
  );
};

export default Main;

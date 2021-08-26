/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, useContext, useEffect, useState, useCallback } from 'react';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, SVGIcon, RevealOnScroll, Button } from 'src/components/shared';
import { ourServices } from 'src/data';
import { AppWindowContext } from 'src/pages/_app';
import { interval, delay } from 'src/utils';

let clearServiceInterval = false;
let unmounted = false;

const MainBodyCarousel = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isMobile = windowWidth < 768;
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const handleCarouselInterval = useCallback(() => {
    if (unmounted) return;

    interval(
      () => {
        handleCarouselButtonClick('next')();
      },
      4000,
      () => clearServiceInterval
    );
    // eslint-disable-next-line
  }, []);

  const handleCarouselButtonClick = useCallback(
    (step: 'next' | 'previous', clear?: boolean) => () => {
      if (unmounted) return;

      setActiveServiceIndex((index) => {
        if (step === 'next') {
          return index === 3 ? 0 : index + 1;
        }

        return index === 0 ? 3 : index - 1;
      });

      if (clear) {
        clearServiceInterval = true;
        delay(4500).then(() => {
          if (clearServiceInterval) {
            clearServiceInterval = false;
            handleCarouselInterval();
          }
        });
      }
    },
    // eslint-disable-next-line
    []
  );

  const handleNextCarouselClick = useCallback(() => {
    handleCarouselButtonClick('next')();
  }, [handleCarouselButtonClick]);

  const handlePreviousCarouselClick = useCallback(() => {
    handleCarouselButtonClick('previous')();
  }, [handleCarouselButtonClick]);

  const handleRenderParticles = useCallback(
    (_, i) => (
      <Box as="span" className={`${activeServiceIndex === i ? S.particleActive : ''}`} key={i} />
    ),
    [activeServiceIndex]
  );

  useEffect(() => {
    if (!isMobile) {
      handleNextCarouselClick();
    }

    return () => {
      clearServiceInterval = true;
      unmounted = true;
    };
  }, [handleNextCarouselClick, isMobile]);

  return (
    <>
      {ourServices.map(
        useCallback(
          (service, i) => (
            <RevealOnScroll
              key={service.name}
              className={`${S.serviceCardContainer}  ${
                activeServiceIndex === i || isMobile ? S.serviceActive : ''
              } mt-4 d-flex justify-content-center justify-content-md-start`}
              allowOverflow
              delay={0.5}>
              <Box
                className={`${S.serviceCard}`}
                data-anim={isMobile ? (i % 2 === 0 ? 'fadeInLeft' : 'fadeInRight') : 'fadeInLeft'}
                data-anim_easing="ease">
                <Box>
                  <SVGIcon name={service.icon} size="medium" />
                  <Box as="h4" className="my-2 h5">
                    {service.name}
                  </Box>
                </Box>
                <Box as="p" className="anim__fadeIn">
                  {service.description}
                </Box>
              </Box>
            </RevealOnScroll>
          ),
          [activeServiceIndex, isMobile]
        )
      )}
      {!isMobile && (
        <Box className={S.servicesCarouselButtonsContainer}>
          <Button _type="icon-button" onClick={handlePreviousCarouselClick}>
            <SVGIcon name="previous" />
          </Button>
          <Button _type="icon-button" onClick={handleNextCarouselClick}>
            <SVGIcon name="next" />
          </Button>
          <Box className={S.particlesContainer}>{ourServices.map(handleRenderParticles)}</Box>
        </Box>
      )}
    </>
  );
};

export default memo(MainBodyCarousel);

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, useContext, useEffect, useState, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, SVGIcon, RevealOnScroll, Img, Button } from 'src/components/shared';
import { ourServices } from 'src/data/home';
import { AppWindowContext } from 'src/pages/_app';
import { GetImage, interval, delay } from 'src/utils';

let clearServiceInterval = false;
let unmounted = false;

const MainBody = (): JSX.Element => {
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

  useEffect(() => {
    if (!isMobile) {
      handleCarouselInterval();
    }

    return () => {
      clearServiceInterval = true;
      unmounted = true;
    };
  }, [handleCarouselInterval, isMobile]);

  return (
    <Container fluid className={`${S.servicesWrapper} text-left text-md-center`}>
      {/* Our Services */}
      <RevealOnScroll>
        <Container as="h2" className="pt-4 mb-3">
          Our Services
        </Container>
      </RevealOnScroll>
      <RevealOnScroll component={Container} className="px-0 px-lg-5 reset-max-width-xl">
        <Box as="p" className="px-0 px-md-4 px-lg-5">
          Getting treatment and medical assistance with Telemedicine and Doctor Home Visit has never
          been so fast and seamless. At CribMD, we use cutting-edge technology to offer low-cost
          healthcare plans that enable you and your family access to comprehensive and convenient
          healthcare services.
        </Box>
      </RevealOnScroll>

      <Container className="shrink-max-width-xxl px-lg-5">
        <Row className="">
          <Col className="d-flex flex-column px-0 ps-0 ps-lg-5 text-start mt-0 mt-md-5">
            {ourServices.map((service, i) => (
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
            ))}
            {!isMobile && (
              <Box className={S.servicesCarouselButtonsContainer}>
                <Button _type="icon-button" onClick={handleCarouselButtonClick('previous', true)}>
                  <SVGIcon name="previous" />
                </Button>
                <Button _type="icon-button" onClick={handleCarouselButtonClick('next', true)}>
                  <SVGIcon name="next" />
                </Button>
                <Box className={S.particlesContainer}>
                  {ourServices.map((_, i) => (
                    <Box
                      as="span"
                      className={`${activeServiceIndex === i ? S.particleActive : ''}`}
                      key={i}
                    />
                  ))}
                </Box>
              </Box>
            )}
          </Col>
          {!isMobile && (
            <Col className="d-none d-md-flex align-items-center justify-content-end mt-md-5 ps-4">
              <RevealOnScroll allowOverflow>
                <Img src={GetImage.home('phone-with-doctors-list')} />
              </RevealOnScroll>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default memo(MainBody);

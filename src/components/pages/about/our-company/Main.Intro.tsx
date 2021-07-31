import { memo } from 'react';
import { Box, Img, RevealOnScroll, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/main.module.scss';
import { SyntheticEvent, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MainIntro = (): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  return (
    <>
      <Container as="section" className={S.mainIntroSection}>
        <RevealOnScroll className="pb-5 align-items-center " component={Row}>
          <Col className="order-1" xs={12} md={6}>
            <Box className={` ${S.missionPoster} ${S.poster}`}>
              <RevealOnScroll>
                <Img
                  srcSet={`/img/about/boy-on-sofa__500x.png 2x, /img/about/boy-on-sofa__250x.png 1x`}
                  alt="boy on sofa"
                  className={S.posterImg}
                  onError={handleImgError}
                  data-anim="fadeIn"
                  data-anim_delay="1"
                  data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
                />
                <Box className={`${S.svgWrapper} d-none d-lg-block`} data-anim_delay="1">
                  <SVGIcon name="curved-square(blue)" />
                </Box>
                <Box
                  className={`${S.svgWrapper} ${S.bottomLayer}  d-block d-md-none`}
                  data-anim_delay="1">
                  <SVGIcon name="wide-rectangle(blue)" />
                </Box>
                <Box
                  className={`  ${S.svgWrapper} ${S.topLayer} d-block d-md-none `}
                  data-anim_delay="1">
                  <SVGIcon name="doctors-briefcase" />
                </Box>
              </RevealOnScroll>
            </Box>
          </Col>
          <Col className="order-0" xs={12} md={6}>
            <RevealOnScroll>
              <Box as="h2" data-anim_delay="0.3">
                Our Mission
              </Box>
            </RevealOnScroll>
            <RevealOnScroll>
              <Box className="secondary-content" as="p" data-anim_delay="0.6">
                Our mission is to democratize healthcare by delivering quality, affordable and
                accessible healthcare to everyone, irrespective of who they are. We want to ensure
                that patients have a say and a voice in what type of care they get, how and when
                they get the care and who gives the care. We understand the need for quality
                healthcare, especially in this times, and we are constantly evolving to meet the
                challenges of everyday healthcare, using state of the art technology to bridge the
                gap more than ever before.
              </Box>
            </RevealOnScroll>
          </Col>
        </RevealOnScroll>
        <RevealOnScroll className="pt-5 pb-5 align-items-center " component={Row}>
          <Col className="order-md-1" xs={12} md={6}>
            <RevealOnScroll>
              <Box as="h2" data-anim_delay="0.3">
                Our Vision
              </Box>
            </RevealOnScroll>
            <RevealOnScroll>
              <Box className="secondary-content" data-anim_delay="0.6">
                CribMD is a diverse network of doctors, health workers and technology enthusiasts
                working to confront healthcare inequity through providing healthcare at every sector
                of society. Together, we are breaking bounds and setting new records in doctor home
                visits and telemedicine with the aim of becoming the preeminent and most reliable
                platform for getting medical care
              </Box>
            </RevealOnScroll>
          </Col>
          <Col className="order-0" xs={12} md={6}>
            <Box className={`${S.visionPoster} ${S.poster}`}>
              <RevealOnScroll>
                <Img
                  srcSet={`/img/about/nurse-with-mask__500x.png 2x, /img/about/nurse-with-mask__250x.png 1x`}
                  alt="boy on sofa"
                  onError={handleImgError}
                  data-anim="fadeIn"
                  data-anim_delay="1"
                  data-anim_ease="cubic-bezier(0.5, 0, .5, 1.25)"
                />
                <Box className={`${S.svgWrapper} d-none d-lg-block`} data-anim_delay="1">
                  <SVGIcon name="curved-square(purple)" />
                </Box>
                <Box
                  className={`${S.svgWrapper} ${S.bottomLayer} ${S.visionSvg}  d-block d-md-none`}
                  data-anim_delay="1">
                  <SVGIcon name="wide-rectangle(purple)" />
                </Box>
                <Box
                  className={`  ${S.svgWrapper} ${S.topLayer}  ${S.visionSvg} d-block d-md-none `}
                  data-anim_delay="1">
                  <SVGIcon name="flower" />
                </Box>
              </RevealOnScroll>
            </Box>
          </Col>
        </RevealOnScroll>
      </Container>
    </>
  );
};

export default memo(MainIntro);

import { memo, useContext } from 'react';
import { Box, Img, RevealOnScroll, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/Main.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { AppWindowContext } from 'src/pages/_app';

const MainIntro = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isMobile = windowWidth < 768;

  return (
    <Container as="section" className={`${S.mainIntroSection} shrink-max-width-xxl pb-5`}>
      <Row className="pb-5 align-items-center">
        <RevealOnScroll
          component={Col}
          className={`${S.missionPoster} ${S.poster} order-1 text-center text-md-end`}
          xs={12}
          md={5}
          easing="ease"
          allowOverflow>
          <Img
            srcSet={`/img/about/boy-on-sofa__500x.png 2x, /img/about/boy-on-sofa__250x.png 1x`}
            alt="boy on sofa"
            className={S.posterImg}
            data-anim="fadeInLeft"
            data-anim_delay={isMobile ? 0 : 0.5}
          />
          <Box
            className={`${S.svgWrapper} d-none d-lg-block`}
            data-anim_delay={isMobile ? 0.5 : 0.75}>
            <SVGIcon name="curved-square(blue)" />
          </Box>
          <Box
            className={`${S.svgWrapper} ${S.bottomLayer}  d-block d-md-none`}
            data-anim_delay={isMobile ? 0.75 : 1}>
            <SVGIcon name="wide-rectangle(blue)" />
          </Box>
          <Box
            className={`${S.svgWrapper} ${S.topLayer} d-block d-md-none `}
            data-anim_delay={isMobile ? 1 : 1.25}>
            <SVGIcon name="doctors-briefcase" />
          </Box>
        </RevealOnScroll>

        <RevealOnScroll
          component={Col}
          className="order-0 pe-0 pe-md-5"
          xs={12}
          md={7}
          easing="ease">
          <Box as="h2">Our Mission</Box>

          <Box className="secondary-content" as="p">
            Our mission is to democratize healthcare by delivering quality, affordable and
            accessible healthcare to everyone, irrespective of who they are. We want to ensure that
            patients have a say and a voice in what type of care they get, how and when they get the
            care and who gives the care. We understand the need for quality healthcare, especially
            in this times, and we are constantly evolving to meet the challenges of everyday
            healthcare, using state of the art technology to bridge the gap more than ever before.
          </Box>
        </RevealOnScroll>
      </Row>

      <Row className="pt-5 pb-5 align-items-center ">
        <RevealOnScroll
          component={Col}
          className="order-md-1 ps-0 ps-md-5"
          xs={12}
          md={6}
          easing="ease">
          <Box as="h2">Our Vision</Box>

          <Box className="secondary-content" data-anim_delay="0.6">
            CribMD is a diverse network of doctors, health workers and technology enthusiasts
            working to confront healthcare inequity through providing healthcare at every sector of
            society. Together, we are breaking bounds and setting new records in doctor home visits
            and telemedicine with the aim of becoming the preeminent and most reliable platform for
            getting medical care
          </Box>
        </RevealOnScroll>

        <RevealOnScroll
          component={Col}
          className={`${S.visionPoster} ${S.poster} order-0 text-center text-md-start`}
          xs={12}
          md={5}
          easing="ease"
          allowOverflow>
          <Img
            srcSet={`/img/about/nurse-with-mask__500x.png 2x, /img/about/nurse-with-mask__250x.png 1x`}
            alt="boy on sofa"
            data-anim="fadeInRight"
            data-anim_delay={isMobile ? 0 : 0.5}
          />
          <Box
            className={`${S.svgWrapper} d-none d-lg-block`}
            data-anim_delay={isMobile ? 0.5 : 0.75}>
            <SVGIcon name="curved-square(purple)" />
          </Box>
          <Box
            className={`${S.svgWrapper} ${S.bottomLayer} ${S.visionSvg}  d-block d-md-none`}
            data-anim_delay={isMobile ? 1 : 1.25}>
            <SVGIcon name="wide-rectangle(purple)" />
          </Box>
          <Box
            className={`${S.svgWrapper} ${S.topLayer}  ${S.visionSvg} d-block d-md-none `}
            data-anim_delay={isMobile ? 1.25 : 1.75}>
            <SVGIcon name="flower" />
          </Box>
        </RevealOnScroll>
      </Row>
    </Container>
  );
};

export default memo(MainIntro);

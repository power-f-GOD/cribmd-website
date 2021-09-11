import { memo, useContext, useCallback } from 'react';
import { Box, Img, RevealOnScroll, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { Col, Container } from 'react-bootstrap';
import { AppWindowContext } from 'src/pages/_app';
import { GetImage } from 'src/utils';

const data = [
  {
    h2: 'Our Mission',
    p: 'Our mission is to democratize healthcare by delivering quality, affordable and accessible healthcare to everyone, irrespective of who they are. We want to ensure that patients have a say and a voice in what type of care they get, how and when they get the care and who gives the care. We understand the need for quality healthcare, especially in this times, and we are constantly evolving to meet the challenges of everyday healthcare, using state of the art technology to bridge the gap more than ever before.',
    imageName: 'doctor-with-child'
  },
  {
    h2: 'Our Vision',
    p: 'CribMD is a diverse network of doctors, health workers and technology enthusiasts working to confront healthcare inequity through providing healthcare at every sector of society. Together, we are breaking bounds and setting new records in doctor home visits and telemedicine with the aim of becoming the preeminent and most reliable platform for getting medical care',
    imageName: 'nurse-folding-arms'
  }
];

const MainIntro = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isMobile = windowWidth < 768;

  return (
    <Container as="section" className={`${S.mainIntroSection} shrink-max-width-xxl pb-5`}>
      {data.map(
        useCallback(
          ({ h2, p, imageName }, i) => (
            <Box
              lazy
              className={`${i === 0 ? 'pb-5' : 'pt-0 pt-md-5 pb-5'} align-items-center row`}
              key={h2}>
              <RevealOnScroll
                component={Col}
                className={`${S.poster} ${
                  i === 0
                    ? 'order-1 text-center text-md-end'
                    : 'order-1 order-md-0 text-center text-md-start'
                }`}
                xs={12}
                md={5}
                easing="ease"
                allowOverflow>
                <Box className={`${S.imageWrapper}`} data-anim="fadeInLeft">
                  <Img
                    srcSet={`${GetImage.ourCompany(imageName)} 400w`}
                    width="400"
                    height="470"
                    src={GetImage.ourCompany(imageName)}
                    alt={imageName}
                    className={S.posterImg}
                  />
                  <SVGIcon
                    name="curved-square(blue)"
                    className={`${S.svgWrapper}`}
                    data-anim_delay={isMobile ? 0.5 : 0.75}
                  />
                </Box>
              </RevealOnScroll>

              <RevealOnScroll
                component={Col}
                className={i === 0 ? 'order-0 pe-0 pe-md-5' : 'order-0 order-md-1 ps-0 ps-md-5'}
                xs={12}
                md={7}
                easing="ease">
                <Box as="h2">{h2}</Box>

                <Box className="pb-4 pb-md-0" as="p" data-anim_delay="0.6">
                  {p}
                </Box>
              </RevealOnScroll>
            </Box>
          ),
          [isMobile]
        )
      )}

      {/* <Box className={`${S.svgWrapper} d-none d-lg-block`} data-anim_delay={isMobile ? 0.5 : 0.75}>
        <SVGIcon name="curved-square(purple)" />
      </Box>
      <Box
        className={`${S.svgWrapper} ${S.bottomLayer} ${S.visionSvg}  d-block d-md-none`}
        data-anim_delay={isMobile ? 0 : 1.25}>
        <SVGIcon name="wide-rectangle(purple)" />
      </Box> */}
    </Container>
  );
};

export default memo(MainIntro);

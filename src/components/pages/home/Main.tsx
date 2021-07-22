/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useContext, useEffect, useCallback, useRef } from 'react';
import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, SVGIcon, RevealOnScroll } from 'src/components/shared';
import { AppContext } from 'src/pages/_app';
import { ScrollReveal } from 'src/utils';
import { AnimName } from 'src/types';

const Main = (): JSX.Element => {
  const { windowWidth } = useContext(AppContext);
  const isMobile = windowWidth < 768;
  const mainRef = useRef<HTMLElement | null>(null);

  const specializationsAnim = useCallback(
    (right?: boolean) => `fadeIn${!isMobile ? 'Up' : right ? 'Right' : 'Left'}` as AnimName,
    [isMobile]
  );

  useEffect(() => {
    const main = mainRef.current;

    if (main) {
      new ScrollReveal(main);
    }
  }, []);

  return (
    <Container as="main" className="my-5" ref={mainRef}>
      <RevealOnScroll className="text-wrapper">
        <Box as="h2" className="text-md-center pt-md-5">
          Thousands of doctors at your beck and call
        </Box>
      </RevealOnScroll>
      <RevealOnScroll className="text-wrapper">
        <Box as="p" className="text-md-center mb-md-5" data-anim_delay="0.6">
          Get access to highly qualified doctors on CribMD!
          <br />
          Don’t risk your health by relying on self-medication or amateur advice.
        </Box>
      </RevealOnScroll>
      <RevealOnScroll as="section" className={S.specializationsGrid} allowOverflow>
        <Box className="p-4 px-3" data-anim={specializationsAnim(true)}>
          <SVGIcon name="wave" size="medium" />
          <Box as="span">Dermatologist</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim()}>
          <SVGIcon name="smiley" size="medium" />
          <Box as="span">Pediatrician</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim(true)}>
          <SVGIcon name="cross" size="medium" />
          <Box as="span">General Practice</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim()}>
          <SVGIcon name="girl" size="medium" />
          <Box as="span">Gynecologist</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim(true)}>
          <SVGIcon name="eye" size="medium" />
          <Box as="span">Optometry</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim()}>
          <SVGIcon name="users" size="medium" />
          <Box as="span">Family Medicine</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim(true)}>
          <SVGIcon name="blood" size="medium" />
          <Box as="span">Endocrinology</Box>
        </Box>
        <Box className="p-4 px-3" data-anim={specializationsAnim()}>
          <SVGIcon name="heart" size="medium" />
          <Box as="span">Cardiology</Box>
        </Box>
      </RevealOnScroll>
    </Container>
  );
};

export default Main;

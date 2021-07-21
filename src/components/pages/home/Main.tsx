/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useContext, useEffect, useCallback, useRef } from 'react';
import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/index/Main.module.scss';
import { Box, SVGIcon } from 'src/components/shared';
import { AppContext } from 'src/pages/_app';
import { registerScrollAnim } from 'src/utils';

const Main = (): JSX.Element => {
  const { windowWidth } = useContext(AppContext);
  const isMobile = windowWidth < 768;
  const mainRef = useRef<HTMLElement | null>(null);

  const specializationsAnim = useCallback(
    (right?: boolean) => `fadeIn${!isMobile ? 'Up' : right ? 'Right' : 'Left'}`,
    [isMobile]
  );

  useEffect(() => {
    const main = mainRef.current;

    if (!main)
      return () => {
        null;
      };

    registerScrollAnim(main, {
      selectors: ["[class*='specializationsGrid'] > *", 'h2', 'p'],
      animClass: (i, element) =>
        /^H2|P$/.test(element.tagName) ? 'fadeInUp' : specializationsAnim(i % 2 === 0)
    });
  }, [specializationsAnim]);

  return (
    <Container as="main" className="my-5" ref={mainRef}>
      <Box className="text-wrapper">
        <Box as="h2" className="text-md-center pt-md-5" data-animdelay="0.4">
          Thousands of doctors at your beck and call
        </Box>
      </Box>
      <Box className="text-wrapper">
        <Box as="p" className="text-md-center mb-md-5" data-animdelay="0.6">
          Get access to highly qualified doctors on CribMD!
          <br />
          Don’t risk your health by relying on self-medication or amateur advice.
        </Box>
      </Box>
      <Box as="section" className={S.specializationsGrid}>
        <Box className="p-4 px-3">
          <SVGIcon name="wave" size="medium" />
          <Box as="span">Dermatologist</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="smiley" size="medium" />
          <Box as="span">Pediatrician</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="cross" size="medium" />
          <Box as="span">General Practice</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="girl" size="medium" />
          <Box as="span">Gynecologist</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="eye" size="medium" />
          <Box as="span">Optometry</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="users" size="medium" />
          <Box as="span">Family Medicine</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="blood" size="medium" />
          <Box as="span">Endocrinology</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="heart" size="medium" />
          <Box as="span">Cardiology</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;

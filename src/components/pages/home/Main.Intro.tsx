/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useContext, useCallback, memo } from 'react';
import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';

import { AppContext } from 'src/pages/_app';
import { AnimName } from 'src/types';
import { specializations } from './data';

import { Box, SVGIcon, RevealOnScroll } from 'src/components/shared';

const MainIntro = (): JSX.Element => {
  const { windowWidth } = useContext(AppContext);
  const isMobile = windowWidth < 768;

  const specializationsAnim = useCallback(
    (right?: boolean) => `fadeIn${!isMobile ? 'Up' : right ? 'Right' : 'Left'}` as AnimName,
    [isMobile]
  );

  return (
    <>
      <RevealOnScroll component={Container} className="text-wrapper">
        <Box as="h2" className="text-md-center pt-md-5">
          Thousands of doctors at your beck and call
        </Box>
      </RevealOnScroll>
      <RevealOnScroll component={Container} className="text-wrapper">
        <Box as="p" className="text-md-center mb-md-5" data-anim_delay="0.6">
          Get access to highly qualified doctors on CribMD!
          <br />
          Don’t risk your health by relying on self-medication or amateur advice.
        </Box>
      </RevealOnScroll>

      {/* Specializations */}
      <Container as="section">
        <RevealOnScroll allowOverflow className={S.specializationsGrid}>
          {specializations.slice(0, 4).map(({ icon, specialization }, i) => (
            <Box
              className="p-4 px-3"
              data-anim={specializationsAnim(i % 2 === 0)}
              key={specialization}>
              <SVGIcon name={icon} size="medium" />
              <Box as="span">{specialization}</Box>
            </Box>
          ))}
        </RevealOnScroll>
        <RevealOnScroll allowOverflow className={S.specializationsGrid}>
          {specializations.slice(4).map(({ icon, specialization }, i) => (
            <Box
              className="p-4 px-3"
              data-anim={specializationsAnim(i % 2 === 0)}
              key={specialization}>
              <SVGIcon name={icon} size="medium" />
              <Box as="span">{specialization}</Box>
            </Box>
          ))}
        </RevealOnScroll>
      </Container>
    </>
  );
};

export default memo(MainIntro);

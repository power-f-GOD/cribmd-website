/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, useCallback, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Avatar, SVGIcon, Button, RevealOnScroll } from 'src/components/shared';
import { GetImage, interval, delay } from 'src/utils';
import { testifiers } from 'src/data';

let unmounted = false;
const avatarWidthEm = 9;

export const CustomerTestimonies = (): JSX.Element => {
  const [activeTIndex, setActiveTestifierIndex] = useState(3);
  const [swapped, setSwapped] = useState(true);
  const activeCustomerName = testifiers[activeTIndex].imageName
    .split('-')
    .map((word) => (word.length < 3 ? `${word}.` : word))
    .join(' ');
  const activeCustomerTestimony = testifiers[activeTIndex].testimony;

  const handleTestifierToggle = useCallback(
    (step: 'next' | 'prev') => async () => {
      const slide = () => {
        if (unmounted) return;

        setSwapped((prev) => !prev);
        setActiveTestifierIndex((prev) => {
          if (step === 'next') {
            return prev === testifiers.length - 1 ? 0 : prev + 1;
          }

          return prev === 0 ? testifiers.length - 1 : prev - 1;
        });
      };

      unmounted = true;
      await delay(100);
      unmounted = false;
      slide();
      interval(slide, 5000, () => unmounted);
    },
    []
  );

  useEffect(() => {
    // handleTestifierToggle('next')();

    return () => {
      unmounted = true;
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Container as="section" className="CustomerTestimonies text-center">
      <RevealOnScroll as="h2" className="mt-3 mb-4" animName="fadeInLeft" easing="ease">
        {'What our customers are saying ...'.split(' ').map((word, i) => (
          <Box as="span" className="me-2 d-inline-block" key={i}>
            {word}
          </Box>
        ))}
      </RevealOnScroll>
      <Box as="blockquote" className="mb-5">
        <Box as="p" className={`theme-tertiary ${swapped ? 'active' : ''}`}>
          &quot;{activeCustomerTestimony}&quot;
        </Box>
        <Box as="p" className={`theme-tertiary ${!swapped ? 'active' : ''}`}>
          &quot;{activeCustomerTestimony}&quot;
        </Box>
      </Box>

      <Box className="__avatars-grid-wrapper">
        <SVGIcon name="caret-filled-down" />
        <Box
          className="__avatars-grid"
          style={{
            width: `calc(${avatarWidthEm}em * ${testifiers.length})`,
            transform: `translateX(-${activeTIndex * avatarWidthEm}em)`
          }}>
          {testifiers.map(({ imageName }, i) => {
            const activeI = activeTIndex;
            const isActive = activeI === i;

            return (
              <Avatar
                src={GetImage.testifier(imageName)}
                elevation={isActive ? '3' : '1'}
                size="medium"
                key={i}
                style={{
                  transform: `scale(${isActive ? '1' : '0.5'}) translateX(${
                    isActive ? '0' : i < activeI ? '-3' : i > activeI ? '3' : '0'
                  }em)`
                }}
                className={isActive ? 'active' : ''}
              />
            );
          })}
        </Box>
        <Box className="__testifier-name mt-2 text-capitalize">
          <Box as="span" className={`h4 ${swapped ? 'active' : ''}`}>
            {activeCustomerName}
          </Box>
          <Box as="span" className={`h4 ${!swapped ? 'active' : ''}`}>
            {activeCustomerName}
          </Box>
        </Box>
        <RevealOnScroll allowOverflow className="mt-3 mt-md-4">
          <Box as="span" className="d-inline-block">
            <Button _type="icon-button" onClick={handleTestifierToggle('prev')}>
              <SVGIcon name="previous" />
            </Button>
          </Box>
          <Box as="span" className="d-inline-block">
            <Button _type="icon-button" onClick={handleTestifierToggle('next')}>
              <SVGIcon name="next" />
            </Button>
          </Box>
        </RevealOnScroll>
      </Box>
    </Container>
  );
};

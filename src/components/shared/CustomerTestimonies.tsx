/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Avatar, SVGIcon, Button, RevealOnScroll } from 'src/components/shared';
import { Container } from 'react-bootstrap';
import { GetImage, interval } from 'src/utils';
import { useState, useCallback, useEffect } from 'react';

const testifiers = [
  {
    name: 'Customer 1',
    testimony:
      'Through the CribMD platform, I have been able to keep my treatment on track and maintain a safe health level I feel comfortable with.',
    imageName: 'customer-1'
  },
  { name: 'Customer 2', testimony: "Customer 2's testimony...", imageName: 'customer-2' },
  { name: 'Customer 3', testimony: "Customer 3's testimony...", imageName: 'customer-3' },
  { name: 'Customer 4', testimony: "Customer 4's testimony...", imageName: 'customer-4' },
  { name: 'Customer 5', testimony: "Customer 5's testimony...", imageName: 'customer-5' },
  { name: 'Customer 6', testimony: "Customer 6's testimony...", imageName: 'customer-6' },
  { name: 'Customer 7', testimony: "Customer 7's testimony...", imageName: 'customer-7' }
];

let unmounted = false;

export const CustomerTestimonies = (): JSX.Element => {
  const [activeTIndex, setActiveTestifierIndex] = useState(3);
  const [swapped, setSwapped] = useState(true);

  const handleTestifierToggle = useCallback(
    (step: 'next' | 'prev') => () => {
      if (unmounted) return;

      setSwapped((prev) => !prev);
      setActiveTestifierIndex((prev) => {
        if (step === 'next') {
          return prev === testifiers.length - 1 ? 0 : prev + 1;
        }

        return prev === 0 ? testifiers.length - 1 : prev - 1;
      });
    },
    []
  );

  useEffect(() => {
    // unmounted = false;
  }, []);

  useEffect(() => {
    interval(handleTestifierToggle('next'), 5000, () => unmounted);

    return () => {
      unmounted = true;
    };
  }, [handleTestifierToggle]);

  return (
    <Container className="CustomerTestimonies text-center mb-5">
      <Box as="section" className="__content">
        <RevealOnScroll as="h2" className="mt-3 mb-4" animName="fadeInLeft" easing="ease">
          {'What our customers are saying ...'.split(' ').map((word, i) => (
            <Box as="span" className="me-2 d-inline-block" key={i}>
              {word}
            </Box>
          ))}
        </RevealOnScroll>
        <Box as="blockquote" className="mb-5">
          <Box as="p" className={`theme-tertiary ${swapped ? 'active' : ''}`}>
            &quot;{testifiers[activeTIndex].testimony}&quot;
          </Box>
          <Box as="p" className={`theme-tertiary ${!swapped ? 'active' : ''}`}>
            &quot;{testifiers[activeTIndex].testimony}&quot;
          </Box>
        </Box>

        <Box className="__avatars-grid-wrapper">
          <SVGIcon name="caret-filled-down" />
          <Box
            className="__avatars-grid"
            style={{
              transform: `translateX(-${activeTIndex * 6}rem)`
            }}>
            {testifiers.map(({ imageName }, i) => {
              const activeI = activeTIndex;
              const isActive = activeI === i;

              return (
                <Avatar
                  src={GetImage.testifier(imageName)}
                  elevation={isActive ? '3' : '1'}
                  size="small"
                  key={i}
                  style={{
                    transform: `scale(${isActive ? '1' : '0.65'}) translateX(${
                      isActive ? '0' : i < activeI ? '-5' : i > activeI ? '5' : '0'
                    }rem)`
                  }}
                  className={isActive ? 'active' : ''}
                />
              );
            })}
          </Box>
          <Box className="__testifier-name mt-2">
            <Box as="span" className={`h4 ${swapped ? 'active' : ''}`}>
              {testifiers[activeTIndex].name}
            </Box>
            <Box as="span" className={`h4 ${!swapped ? 'active' : ''}`}>
              {testifiers[activeTIndex].name}
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
      </Box>
    </Container>
  );
};

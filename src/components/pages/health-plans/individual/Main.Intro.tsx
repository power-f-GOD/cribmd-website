import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Box, RevealOnScroll } from 'src/components/shared';

const MainIntro = (): JSX.Element => {
  return (
    <>
      <RevealOnScroll component={Container} className="mb-5">
        <Box as="h2" data-anim_delay="0.3">
          Benefits
        </Box>
      </RevealOnScroll>
    </>
  );
};

export default memo(MainIntro);

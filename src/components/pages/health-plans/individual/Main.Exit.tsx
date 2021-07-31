import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Box, RevealOnScroll, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';
import { benefitsData } from './data';

const MainExit = (): JSX.Element => {
  return (
    <Container>
      <Box className={S.benfitsContainer}>
        <RevealOnScroll>
          <Box as="h3" data-anim="fadeInUp">
            More benefits
          </Box>
        </RevealOnScroll>
        <RevealOnScroll className={S.benefitsGrid}>
          {benefitsData.map(({ heading, content }) => (
            <Box key={heading} className="p-md-3">
              <RevealOnScroll>
                <Box data-anim="fadeInRight" data-anim_delay="0.3">
                  <SVGIcon name="activity-green" size="small" />
                </Box>
              </RevealOnScroll>
              <RevealOnScroll>
                <Box as="h4" data-anim_delay="0.6">
                  {heading}
                </Box>
              </RevealOnScroll>
              <RevealOnScroll>
                <Box as="p" data-anim_delay="0.9">
                  {content}
                </Box>
              </RevealOnScroll>
            </Box>
          ))}
        </RevealOnScroll>
        <RevealOnScroll>
          <Box as="p" className="mt-5" data-anim="fadeInUp" data-anim_delay="1.1">
            Don’t see a benefit you’re looking for?
            <Box as="span" className="ms-1">
              Ask us!
            </Box>
          </Box>
        </RevealOnScroll>
      </Box>
    </Container>
  );
};

export default memo(MainExit);

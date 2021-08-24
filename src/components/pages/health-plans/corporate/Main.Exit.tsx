import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Box, RevealOnScroll, SVGIcon, Anchor } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';
import { corporateMoreBenefitsData } from '../../../../data/health-plans/corporate';

const MainExit = (): JSX.Element => {
  return (
    <Container className={`${S.moreBenefitsContainer} p-sm-4 p-lg-5 mt-5 shrink-max-width-xxl`}>
      {/* <Box > */}
      <RevealOnScroll className="pt-3">
        <Box as="h3" className="mt-md-0">
          More benefits
        </Box>
      </RevealOnScroll>

      <Box className={`${S.moreBenefitsGrid}`}>
        {corporateMoreBenefitsData.map(({ heading, content, svgName }) => (
          <RevealOnScroll key={heading}>
            <Box data-anim="fadeInRight" data-anim_delay="0.3">
              <SVGIcon name={svgName} size="small" />
            </Box>
            <Box as="h4" className="h5" data-anim_delay="0.6">
              {heading}
            </Box>
            <Box as="p" data-anim_delay="0.9">
              {content}
            </Box>
          </RevealOnScroll>
        ))}
      </Box>

      <RevealOnScroll>
        <Box as="p" className="mt-5" data-anim="fadeInUp" data-anim_delay="1.1">
          Don’t see a benefit you’re looking for?
          <Anchor routeLink href="/faq" className="ms-1">
            Ask us!
          </Anchor>
        </Box>
      </RevealOnScroll>
      {/* </Box> */}
    </Container>
  );
};

export default memo(MainExit);

import { memo } from 'react';
import { Box, SVGIcon, RevealOnScroll, SVGShape } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { Container } from 'react-bootstrap';
import MainBodyTeamMembersPrimary from './Main.Body.TeamMembersPrimary';
import MainBodyTeamMembersSecondary from './Main.Body.TeamMembersSecondary';
import MainBodyAdvisors from './Main.Body.Advisors';

const MainBody = (): JSX.Element => {
  return (
    <Box as="section" className={S.mainBody}>
      {/* side icons(svg) */}
      <Box
        className={`${S.svgWrapper} ${S.rect} ${S.positionRight} ${S.outerRect}  d-none d-sm-block`}>
        <SVGIcon name="rectangle-slanted-right" />
      </Box>
      <Box
        className={`${S.svgWrapper} ${S.rect} ${S.positionRight} ${S.innerRect}  d-none d-sm-block`}>
        <SVGIcon name="rectangle-slanted-right" />
      </Box>
      <Box
        className={`${S.svgWrapper} ${S.rect} ${S.positionLeft} ${S.outerRect} d-none d-sm-block`}>
        <SVGIcon name="rectangle-slanted-left" />
      </Box>
      <Box
        className={`${S.svgWrapper} ${S.rect} ${S.positionLeft} ${S.innerRect} d-none d-sm-block`}>
        <SVGIcon name="rectangle-slanted-left" />
      </Box>

      <Container className="shrink-max-width-xxl pt-4">
        {/* team members */}
        <RevealOnScroll
          easing="ease"
          className="justify-content-md-center text-md-center my-3 my-md-5 pb-2">
          <Box as="h2" className="my-3" data-amin-dalay="0.3">
            Meet Our Team
          </Box>

          <Box as="p" className="secondary-content" data-amin-dalay="0.6">
            Meet the team whose inspiration brings health care to your doorstep.
          </Box>
        </RevealOnScroll>

        <MainBodyTeamMembersPrimary />

        {/* other team members */}
        <RevealOnScroll easing="ease" className="py-md-4 text-md-center">
          <Box as="h3" className="mb-md-4 mt-5">
            Other Team Members
          </Box>
        </RevealOnScroll>

        <MainBodyTeamMembersSecondary />

        {/* advisors */}
        <RevealOnScroll easing="ease" className="py-md-4 text-md-center">
          <Box as="h3" className="mt-4 mb-3">
            Meet Our Advisors
          </Box>
        </RevealOnScroll>

        <MainBodyAdvisors />

        <SVGShape name="wave" className={S.wave} />
      </Container>
    </Box>
  );
};

export default memo(MainBody);

import { memo } from 'react';
import { Box, Img, SVGIcon, RevealOnScroll, SVGShape } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import TeamModal from './Modal';
import { Container } from 'react-bootstrap';
import { teamData, teamMembersData, advisorsData } from './data';

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

        <Box className={S.teamGrid}>
          {teamData.map((team, i) => (
            <RevealOnScroll
              key={team.name}
              className={`order-${team.order} order-lg-${team.orderLg} text-center`}
              delay={(i % 3) * 0.125}
              easing="ease"
              allowOverflow
              animName="fadeInLeft">
              <Box className={`${S.teamMemberContainer}`}>
                <TeamModal content={team} />
                <Img srcSet={`${team.imagePath}, ${team.imagePath}`} alt="team image" />
                <Box className={`${S.ourTeamContent} mb-auto`}>
                  <Box as="h6" className="mt-4 mb-2">
                    {team.name}
                  </Box>
                  <Box as="span" className="tertiary-content">
                    {team.role}
                  </Box>
                </Box>
              </Box>
            </RevealOnScroll>
          ))}
        </Box>

        {/* other team members */}
        <RevealOnScroll easing="ease" className="py-md-4 text-md-center">
          <Box as="h3" className="mb-md-4 mt-5">
            Other Team Members
          </Box>
        </RevealOnScroll>

        <Box className={S.teamMembersGrid}>
          {teamMembersData.map((team, i) => (
            <RevealOnScroll
              key={team.name}
              className="my-2"
              easing="ease"
              animName={'fadeInRight'}
              delay={(i % 5) * 0.1}>
              <Box className={`${S.teamMembersContent} ${S.ourTeamContent} text-start w-100`}>
                <Img srcSet={`${team.imageUrl}, ${team.imageUrl}`} alt="team member image" />
                <Box className="mt-auto">
                  <Box as="span" className="h6 mt-2 mb-0">
                    {team.name}
                  </Box>
                  <Box as="small">{team.role} </Box>
                </Box>
              </Box>
            </RevealOnScroll>
          ))}
        </Box>

        {/* advisors */}
        <RevealOnScroll easing="ease" className="py-md-4 text-md-center">
          <Box as="h3" className="mt-4 mb-3">
            Meet Our Advisors
          </Box>
        </RevealOnScroll>

        <Box className={S.teamMembersGrid}>
          {advisorsData.map((advisor, i) => (
            <RevealOnScroll key={advisor.name} className="my-2" easing="ease" delay={(i % 5) * 0.1}>
              <Box className={`${S.teamMembersContent} ${S.ourTeamContent}`}>
                <Img srcSet={`${advisor.imageUrl}, ${advisor.imageUrl}`} alt="team member image" />

                <Box as="span" className="h6 mt-2 mb-0">
                  {advisor.name}
                </Box>
              </Box>
            </RevealOnScroll>
          ))}
        </Box>

        <SVGShape name="wave" className={S.wave} />
      </Container>
    </Box>
  );
};

export default memo(MainBody);

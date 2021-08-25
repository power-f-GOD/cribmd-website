import { memo, useContext } from 'react';
import { Box, SVGIcon, RevealOnScroll, SVGShape, Avatar } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import TeamModal from './Modal';
import { Container } from 'react-bootstrap';
import { teamMembersPrimary, teamMembersSecondary, advisorsData } from 'src/data';
import { GetImage, getHumanName } from 'src/utils';
import { AppWindowContext } from 'src/pages/_app';

const MainBody = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

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
          {teamMembersPrimary.map(({ imageName, primaryBio, secondaryBio, role, skill }, i) => (
            <RevealOnScroll
              key={imageName + i}
              className={`${
                i === 0 ? 'order-1 order-md-0' : i > 1 ? 'order-2' : 'order-0'
              } text-center`}
              delay={(i % 3) * 0.125}
              easing="ease"
              allowOverflow
              animName="fadeInLeft">
              <Box className={`${S.teamMemberContainer}`}>
                <TeamModal
                  primaryBio={primaryBio}
                  secondaryBio={secondaryBio}
                  role={role}
                  skill={skill}
                  imageName={imageName}
                />

                <Avatar
                  isJPG
                  size={windowWidth < 576 ? 'small' : 'medium'}
                  src={GetImage.teamMembersPrimary(imageName)}
                  alt="team member image"
                />

                <Box className={`${S.ourTeamContent} mb-auto`}>
                  <Box as="h6" className="mt-4 mb-2">
                    {getHumanName(imageName)}
                  </Box>
                  <Box as="span" className="tertiary-content">
                    {role}
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
          {teamMembersSecondary.map(({ imageName, role }, i) => (
            <RevealOnScroll
              key={imageName + i}
              className="my-2"
              easing="ease"
              animName={'fadeInRight'}
              delay={(i % 5) * 0.1}>
              <Box className={`${S.teamMembersContent} ${S.ourTeamContent} text-start w-100`}>
                <Avatar
                  isJPG
                  elevation="1"
                  size="small"
                  src={GetImage.teamMembersSecondary(imageName)}
                  alt="team member image"
                />
                <Box className="mt-auto">
                  <Box as="span" className="h6 mt-2 mb-0">
                    {getHumanName(imageName)}
                  </Box>
                  <Box as="small">{role}</Box>
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
            <RevealOnScroll
              key={advisor.name + i}
              className="my-2"
              easing="ease"
              delay={(i % 5) * 0.1}>
              <Box className={`${S.teamMembersContent} ${S.ourTeamContent}`}>
                <Avatar
                  isJPG
                  elevation="1"
                  size="small"
                  src={GetImage.advisors(advisor.imageName)}
                  alt="team member image"
                />

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

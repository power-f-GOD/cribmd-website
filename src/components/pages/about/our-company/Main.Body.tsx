import { useContext, useCallback, SyntheticEvent, memo } from 'react';
import { Box, Img, SVGIcon, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/main.module.scss';
import TeamModal from './Modal';
import { AppContext } from 'src/pages/_app';
import { Col, Container, Row } from 'react-bootstrap';
import { teamData, teamMembersData, advisorsData } from './data';
import { AnimName } from 'src/types';
import Doctor from './Doctor';
import Cta from './Cta';

const MainBody = (): JSX.Element => {
  const { windowWidth } = useContext(AppContext);
  const isMobile = windowWidth < 768;

  const teamsAnim = useCallback(
    (right?: boolean) => `fadeIn${!isMobile ? 'Up' : right ? 'Right' : 'Left'}` as AnimName,
    [isMobile]
  );

  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  return (
    <>
      <Box as="section" className={S.mainBodySection}>
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
        <Box className={`${S.svgWrapper} ${S.rect} ${S.positionBottom}  d-none d-sm-block`}>
          <SVGIcon name="wavy-rectangle-lg" />
        </Box>
        <Box className={`${S.svgWrapper} ${S.rect} ${S.positionBottom} d-block d-sm-none`}>
          <SVGIcon name="wavy-rectangle-sm" />
        </Box>

        <Container>
          {/* team members */}
          <RevealOnScroll className="justify-content-md-center text-md-center" component={Row}>
            <Col md={8} xs={12}>
              <RevealOnScroll>
                <Box as="h2" className="mt-3" data-amin-dalay="0.3">
                  Meet Our Team
                </Box>
              </RevealOnScroll>
              <RevealOnScroll>
                <Box as="p" className="secondary-content d-none d-sm-block" data-amin-dalay="0.6">
                  Meet the team whose inspiration brings health care to your doorstep.
                </Box>
              </RevealOnScroll>
              <RevealOnScroll>
                <Box className="d-block d-sm-none secondary-content" data-amin-dalay="0.6">
                  Don’t risk your health by relying on self-medication or amateur advice. Get access
                  to highly qualified doctors on CribMD!
                </Box>
              </RevealOnScroll>
            </Col>
          </RevealOnScroll>

          <RevealOnScroll allowOverflow className={S.teamGrid}>
            {teamData.map((team, i) => (
              <Box
                key={team.name}
                className={`p-4 px-3 ${S.teamContainer}`}
                data-anim={teamsAnim(i % 2 === 0)}>
                <TeamModal content={team} />
                <Img
                  srcSet={`${team.imagePath}, ${team.imagePath}`}
                  alt="team image"
                  onError={handleImgError}
                />
                <Box className={S.ourTeamContent}>
                  <Box as="h6" className="mt-3">
                    {team.name}
                  </Box>
                  <Box as="span" className="tertiary-content">
                    {team.role}
                  </Box>
                </Box>
              </Box>
            ))}
          </RevealOnScroll>

          {/* other team members */}
          <RevealOnScroll>
            <Box as="h4" className="mt-md-5 mb-md-5">
              Other Team Members
            </Box>
          </RevealOnScroll>

          <RevealOnScroll allowOverflow className={S.teamMembersGrid}>
            {teamMembersData.map((team, i) => (
              <Box key={team.name} className="p-2 px-3" data-anim={teamsAnim(i % 2 === 0)}>
                <Box className={`${S.teamMembersContent} ${S.ourTeamContent}`}>
                  <Img
                    srcSet={`${team.imageUrl}, ${team.imageUrl}`}
                    alt="team member image"
                    onError={handleImgError}
                  />
                  <Box>
                    <Box as="h6">{team.name}</Box>
                    <Box as="span" className="tertiary-content">
                      {team.role}{' '}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </RevealOnScroll>

          {/* advisors */}
          <RevealOnScroll>
            <Box as="h4" className="mt-md-5 mb-md-5">
              Meet Our Advisors
            </Box>
          </RevealOnScroll>

          <RevealOnScroll allowOverflow className={S.teamMembersGrid}>
            {advisorsData.map((advisor, i) => (
              <Box key={advisor.name} className="p-2 px-3" data-anim={teamsAnim(i % 2 === 0)}>
                <Box className={`${S.teamMembersContent} ${S.ourTeamContent}`}>
                  <Img
                    srcSet={`${advisor.imageUrl}, ${advisor.imageUrl}`}
                    alt="team member image"
                    onError={handleImgError}
                  />
                  <Box>
                    <Box as="h6">{advisor.name}</Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </RevealOnScroll>
        </Container>
      </Box>
      <Doctor />
      <Cta />
    </>
  );
};

export default memo(MainBody);

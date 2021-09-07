import { memo, useContext, useMemo, useCallback } from 'react';
import { Box, RevealOnScroll, Avatar } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import TeamModal from './Modal';
import { teamMembersPrimary } from 'src/data';
import { GetImage, getHumanName } from 'src/utils';
import { AppWindowContext } from 'src/pages/_app';

const MainBodyTeamMembersPrimary = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <Box className={S.teamGrid}>
      {useMemo(() => teamMembersPrimary, []).map(
        useCallback(
          ({ imageName, primaryBio, secondaryBio, role, skill }, i) => (
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
                  <Box as="strong" className="mt-2 mt-md-4 mb-2 h6">
                    {getHumanName(imageName)}
                  </Box>
                  <Box as="small" className="d-inline-block theme-tertiary">
                    {role}
                  </Box>
                </Box>
              </Box>
            </RevealOnScroll>
          ),
          [windowWidth]
        )
      )}
    </Box>
  );
};

export default memo(MainBodyTeamMembersPrimary);

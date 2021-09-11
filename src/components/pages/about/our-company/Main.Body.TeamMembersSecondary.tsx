import { memo, useMemo, useCallback } from 'react';
import { Box, RevealOnScroll, Avatar } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { teamMembersSecondary } from 'src/data';
import { GetImage, getHumanName } from 'src/utils';

const MainBodyTeamMembersSecondary = (): JSX.Element => {
  return (
    <Box lazy className={S.teamMembersGrid}>
      {useMemo(() => teamMembersSecondary, []).map(
        useCallback(
          ({ imageName, role }, i) => (
            <RevealOnScroll
              key={imageName + i}
              className={`${S.teamMember} my-2`}
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
                  <Box as="strong" className="h6 mt-2 mb-0">
                    {getHumanName(imageName)}
                  </Box>
                  <Box as="small">{role}</Box>
                </Box>
              </Box>
            </RevealOnScroll>
          ),
          []
        )
      )}
    </Box>
  );
};

export default memo(MainBodyTeamMembersSecondary);

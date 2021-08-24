import { useState, FC, useCallback, memo } from 'react';

import { Anchor, Box, SVGIcon, Img, Button } from 'src/components/shared';
import { Modal } from 'react-bootstrap';

import S from 'src/styles/pages/about/our-company/index.module.scss';
import { teamMembersPrimary } from 'src/data';
import { getHumanName } from 'src/utils';

const TeamModal: FC<
  Pick<typeof teamMembersPrimary[0], 'primaryBio' | 'secondaryBio' | 'imageName' | 'role' | 'skill'>
> = ({ primaryBio, secondaryBio, imageName, role, skill }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleOnHide = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnOpen = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <Box>
      {(primaryBio || secondaryBio) && (
        <Anchor onClick={handleOnOpen}>
          <SVGIcon name="double-arrow" size="tiny" />
        </Anchor>
      )}
      <Modal onHide={handleOnHide} show={showModal}>
        <Box className={`${S.teamModal}`}>
          <Box className={`${S.modalHeader} modal-header `}>
            <Box className="align-items-center d-flex">
              <Img srcSet={imageName} alt="team image" />
              <Box className="flex-column ms-2">
                <Box as="h6" className="mb-0">
                  {getHumanName(imageName)}
                  {/* <SVGIcon name="arrow-top-right" size="inherit" /> */}
                </Box>
                <Box as="p" className="tertiary-content mb-2 mt-0">
                  {role} | {skill}
                </Box>
              </Box>
            </Box>

            <Button className="close " onClick={() => setShowModal(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </Box>
          <Box className="modal-body mb-2">
            <Box className={`${S.modalContent} secondary-content`}>
              {primaryBio}
              <br></br>
              {secondaryBio}
              {/* <a
                className={S.linkd}
                href="https://www.linkedin.com/in/ngiriuchechukwu"
                target="_blank"
                rel="noreferrer">
                visit profile
              </a> */}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default memo(TeamModal);

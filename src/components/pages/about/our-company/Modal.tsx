import { useState, FC, useCallback, memo } from 'react';

import { Anchor, Box, SVGIcon, Img, Button } from 'src/components/shared';
import { Modal } from 'react-bootstrap';

import S from 'src/styles/pages/about/our-company/index.module.scss';

const TeamModal: FC<{
  content: {
    name: string;
    imagePath: string;
    role: string;
    skill: string;
    contentFirst: string;
    contentSecond: string;
  };
}> = ({ content }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleOnHide = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleOnOpen = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <Box>
      <Anchor key={content.name} onClick={handleOnOpen}>
        <SVGIcon name="double-arrow" size="tiny" />
      </Anchor>
      <Modal onHide={handleOnHide} show={showModal}>
        <Box className={`${S.teamModal}`}>
          <Box className={`${S.modalHeader} modal-header `}>
            <Box className="align-items-center d-flex ">
              <Img srcSet={content.imagePath} alt="team image" />
              <Box className="flex-column">
                <Box as="h6" className="mb-n3">
                  {content.name}
                  <SVGIcon name="arrow-top-right" size="inherit" />
                </Box>
                <Box as="span" className="tertiary-content">
                  {content.role} | {content.skill}
                </Box>
              </Box>
            </Box>

            <Button className="close " onClick={() => setShowModal(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
          </Box>
          <Box className="modal-body mb-2">
            <Box className={`${S.modalContent} secondary-content`}>
              {content.contentFirst}
              <br></br>
              {content.contentSecond}
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

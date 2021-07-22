import React, { useState, FC, SyntheticEvent, useCallback } from 'react';

import { Anchor, Box, SVGIcon, Img, Button } from 'src/components/shared';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from 'src/styles/pages/about/our-company/index.module.scss';

const TeamModal: FC<{ content: any }> = ({ content }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleOnHide = useCallback(() => {
    setShowModal(false);
  }, []);
  const handleOnOpen = useCallback(() => {
    setShowModal(true);
  }, []);
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;

    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);
  return (
    <Box key={content.id}>
      <Anchor key={content.id} onClick={handleOnOpen}>
        <SVGIcon name="double-arrow" size="tiny" />
      </Anchor>
      <Modal onHide={handleOnHide} show={showModal}>
        <Box className={`${styles.teamModal}`}>
          <Box className={`${styles.modalHeader} modal-header `}>
            <Box className="align-items-center d-flex ">
              <Img
                srcSet={`${content.imagePath}, ${content.imagePath}`}
                alt="team image"
                onError={handleImgError}
              />
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
            <Box className={`${styles.modalContent} secondary-content`}>
              {content.contentFirst}
              <br></br>
              {content.contentSecond}
              <a
                className={styles.linkd}
                href="https://www.linkedin.com/in/ngiriuchechukwu"
                target="_blank"
                rel="noreferrer">
                visit profile
              </a>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default TeamModal;

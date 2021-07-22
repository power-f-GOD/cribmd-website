import React, { useState, FC, SyntheticEvent, useCallback } from 'react';

import { Anchor, Box, SVG, Img, Button } from 'src/components/shared';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from 'src/styles/pages/about/our-company/index.module.scss';

const TeamModal: FC<{ content: any }> = ({ content }): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleOnHide = useCallback(() => {
    setShowModal(false);
  }, []);
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;

    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);
  return (
    <Box key={content.id}>
      <Anchor
        key={content.id}
        onClick={() => {
          setShowModal(true);
        }}>
        <SVG
          className="max-icon"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 3H21V9"
            stroke="#1971F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 21H3V15"
            stroke="#1971F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 3L14 10"
            stroke="#1971F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 21L10 14"
            stroke="#1971F5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SVG>
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
                  <SVG
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.83301 14.1667L14.1663 5.83337"
                      stroke="#0D2344"
                      strokeOpacity="0.4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83301 5.83337H14.1663V14.1667"
                      stroke="#0D2344"
                      strokeOpacity="0.4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </SVG>
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

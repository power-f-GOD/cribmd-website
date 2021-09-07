/* eslint-disable react/display-name */
import { memo, useCallback, useMemo } from 'react';

import { Box, Img, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/gallery/index.module.scss';
import { GetImage } from 'src/utils';
import { galleryPhotos } from 'src/data/about/gallery';

const chunk = 6;

const MainGalleryGrid = (): JSX.Element => {
  return (
    <Box as="section" className={`${S.galleryGrid} mb-3 mt-5`}>
      {useMemo(() => galleryPhotos, []).map(
        useCallback(
          ({ imageName, description }, i) => (
            <RevealOnScroll
              delay={(i % 6) * 0.125}
              className={`${S.galleryGridItem}`}
              key={i}
              animName={
                Math.floor((i / chunk) % 3) === 0
                  ? 'fadeInRight'
                  : Math.floor((i / chunk) % 3) === 1
                  ? 'fadeInLeft'
                  : 'fadeInUp'
              }
              easing="ease">
              <Img isJPG src={GetImage.gallery(imageName)} />
              <Box as="h2" className="w-100 h6" data-anim="fadeIn">
                <Box as="span" className="w-100 fw-normal lh-base">
                  {description || imageName}
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

export default memo(MainGalleryGrid);

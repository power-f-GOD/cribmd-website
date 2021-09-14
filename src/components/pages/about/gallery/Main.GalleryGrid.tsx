/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import { memo, useCallback } from 'react';

import { Box, Img, RevealOnScroll, LazyBox } from 'src/components/shared';
import S from 'src/styles/pages/about/gallery/index.module.scss';
import { GetImage } from 'src/utils';
import { galleryPhotos } from 'src/data/about/gallery';

const chunk = 6;
const chunkArr = Array(Math.ceil(galleryPhotos.length / chunk)).fill('') as any[];

const MainGalleryGrid = (): JSX.Element => {
  const handleRenderGridItem = useCallback(
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
  );

  return (
    <>
      {
        chunkArr.map((_, i) => (
          <LazyBox
            as="section"
            key={i}
            className={`${S.galleryGrid} mb-3 ${i === 0 ? 'mt-5' : ''}`}>
            {galleryPhotos.slice(i * chunk, (i + 1) * chunk).map(handleRenderGridItem)}
          </LazyBox>
        )) as JSX.Element[]
      }
    </>
  );
};

export default memo(MainGalleryGrid);

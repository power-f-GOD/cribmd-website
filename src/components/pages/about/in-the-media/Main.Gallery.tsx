import { memo, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import { Box, Img, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/in-the-media/Main.module.scss';
import { GetImage, interval } from 'src/utils';

const images = Array(12).fill({
  title: '',
  name: 'image',
  description: 'A short description about the event or people in the Image.'
});
let clearPhotoInterval = false;

const MainGallery = (): JSX.Element => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    interval(
      () => {
        setActivePhotoIndex((index) => {
          return index === images.length - 1 ? 0 : index + 1;
        });
      },
      3000,
      () => clearPhotoInterval
    );

    return () => {
      clearPhotoInterval = true;
    };
  }, []);

  return (
    <Container as="section" className={`${S.Gallery} mt-5`}>
      <RevealOnScroll className="pt-3" easing="ease">
        <Box as="h2" className="h3 text-md-center">
          Gallery
        </Box>
      </RevealOnScroll>

      <RevealOnScroll className={`${S.galleryGrid} mb-3`} animName="fadeInDown" easing="ease">
        {images.slice(0, 4).map(({ name, description }, i) => (
          <Box
            className={`${S.galleryGridItem} ${
              activePhotoIndex === i ? S.galleryGridItemActive : ''
            }`}
            key={i}>
            <Img src={GetImage.gallery(name)} />
            <Box as="p">
              <Box as="span">{description}</Box>
            </Box>
          </Box>
        ))}
      </RevealOnScroll>

      <RevealOnScroll className={`${S.galleryGrid} mb-3`} animName="fadeInLeft" easing="ease">
        {images.slice(4, 8).map(({ name, description }, i) => (
          <Box
            className={`${S.galleryGridItem}  ${
              activePhotoIndex === 4 + i ? S.galleryGridItemActive : ''
            }`}
            key={i}>
            <Img src={GetImage.gallery(name)} />
            <Box as="p">
              <Box as="span">{description}</Box>
            </Box>
          </Box>
        ))}
      </RevealOnScroll>

      <RevealOnScroll className={`${S.galleryGrid}`} animName="fadeInUp" easing="ease">
        {images.slice(8, 12).map(({ name, description }, i) => (
          <Box
            className={`${S.galleryGridItem}  ${
              activePhotoIndex === 8 + i ? S.galleryGridItemActive : ''
            }`}
            key={i}>
            <Img src={GetImage.gallery(name)} />
            <Box as="p">
              <Box as="span">{description}</Box>
            </Box>
          </Box>
        ))}
      </RevealOnScroll>
    </Container>
  );
};

export default memo(MainGallery);

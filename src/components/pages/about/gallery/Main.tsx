/* eslint-disable react/display-name */
import { memo, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { Box, Img, RevealOnScroll, Button, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/gallery/index.module.scss';
import { GetImage, interval } from 'src/utils';

const images: Array<{
  title: string;
  name: string;
  description: string;
}> = Array(18)
  .fill({
    title: '',
    name: 'image',
    description: 'A short description about the event or people in the Image.'
  })
  .map((photo, i) => ({ ...photo, name: photo.name + ((i % 5) + 1) }));
const chunk = 6;
let clearPhotoInterval = false;

const MainGallery = (): JSX.Element => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  // const [slideIndices, setSlideIndices] = useState([0, 1, 2, 3, 4]);

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
    <Container as="section" className={`Gallery ${S.Gallery} mt-5 shrink-max-width-xxl`}>
      <ImageGallery
        items={
          images.map(({ name, description, title }) => {
            return {
              original: GetImage.gallery(name),
              originalTitle: title,
              description,
              thumbnail: GetImage.gallery(name),
              thumbnailHeight: 50,
              renderItem: (props) => <Img src={props.original} />,
              renderThumbInner: (props) => (
                <Img
                  src={props.original}
                  // style={{
                  //   maxHeight: 'calc(100vh - 4.5em)',
                  //   objectFit: 'cover',
                  //   objectPosition: 'center'
                  // }}
                />
              )
            };
          }) as ReactImageGalleryItem[]
        }
        showPlayButton={false}
        showIndex={true}
        startIndex={activePhotoIndex || 0}
        // additionalClass={windowWidth < 768 || !hasExtra ? 'fade-in' : 'slide-in-left'}
        infinite={false}
        // onClick={(e) => {
        //   if (!/A|BUTTON|IMG|VIDEO/i.test((e as any).target.tagName)) {
        //     handleClose();
        //   }
        // }}

        onSlide={(currentIndex) => {
          setActivePhotoIndex(currentIndex);
        }}
        renderLeftNav={(onClick, disabled) => (
          <Button onClick={onClick} _type="icon-button" disabled={disabled} className="previous">
            <SVGIcon name="previous" />
          </Button>
        )}
        renderRightNav={(onClick, disabled) => (
          <Button onClick={onClick} _type="icon-button" disabled={disabled} className="next">
            <SVGIcon name="next" />
          </Button>
        )}
      />

      {!false && (
        <>
          <RevealOnScroll
            className={`${S.galleryGrid} mb-3 mt-5`}
            animName="fadeInRight"
            easing="ease">
            {images.slice(0, chunk).map(({ name, description }, i) => (
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
            {images.slice(chunk, chunk * 2).map(({ name, description }, i) => (
              <Box
                className={`${S.galleryGridItem}  ${
                  activePhotoIndex === chunk + i ? S.galleryGridItemActive : ''
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
            {images.slice(chunk * 2, chunk * 3).map(({ name, description }, i) => (
              <Box
                className={`${S.galleryGridItem}  ${
                  activePhotoIndex === chunk * 2 + i ? S.galleryGridItemActive : ''
                }`}
                key={i}>
                <Img src={GetImage.gallery(name)} />
                <Box as="p">
                  <Box as="span">{description}</Box>
                </Box>
              </Box>
            ))}
          </RevealOnScroll>
        </>
      )}
    </Container>
  );
};

export default memo(MainGallery);

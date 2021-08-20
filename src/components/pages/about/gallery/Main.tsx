/* eslint-disable react/display-name */
import { memo, useEffect, useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { Box, Img, RevealOnScroll, Button, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/gallery/index.module.scss';
import { GetImage, interval, delay } from 'src/utils';

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
let unmounted = false;

const MainGallery = (): JSX.Element => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const handleGallerySlide = useCallback((index?: number) => {
    const slide = async (): Promise<void> => {
      await delay(1000);

      if (!unmounted) return;

      unmounted = false;
      interval(
        () => {
          setActivePhotoIndex((index) => {
            return index === images.length - 1 ? 0 : index + 1;
          });
        },
        10000,
        () => unmounted
      );
    };

    unmounted = true;

    if (index !== undefined) {
      setActivePhotoIndex(index);
      return slide();
    }

    delay(1000).then(() => {
      slide();
    });
  }, []);

  useEffect(() => {
    handleGallerySlide();

    return () => {
      unmounted = true;
    };
  }, [handleGallerySlide]);

  return (
    <Container as="section" className={`Gallery ${S.Gallery} mt-5 shrink-max-width-xx`}>
      <ImageGallery
        items={
          images.map(({ name, description, title }) => {
            return {
              original: GetImage.gallery(name),
              originalTitle: title,
              description,
              thumbnail: GetImage.gallery(name),
              thumbnailHeight: 50,
              renderItem: (props) => (
                <>
                  <Img src={props.original} alt={props.description} />
                  <Box as="span" className="image-gallery-description">
                    {props.description}
                  </Box>
                </>
              ),
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
        slideDuration={600}
        infinite={false}
        onSlide={useCallback(
          (currentIndex) => {
            handleGallerySlide(currentIndex);
          },
          [handleGallerySlide]
        )}
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

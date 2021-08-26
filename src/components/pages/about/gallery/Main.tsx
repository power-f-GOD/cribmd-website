/* eslint-disable react/display-name */
import { memo, useEffect, useState, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { Box, Img, RevealOnScroll, Button, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/gallery/index.module.scss';
import { GetImage, interval, delay } from 'src/utils';
import { galleryPhotos } from 'src/data/about/gallery';

let unmounted = false;
const chunk = 6;

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
            return index === galleryPhotos.length - 1 ? 0 : index + 1;
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
          useMemo(() => galleryPhotos, []).map(
            useCallback(({ imageName, description }) => {
              return {
                original: GetImage.gallery(imageName),
                originalTitle: imageName,
                description: description || imageName,
                thumbnail: GetImage.gallery(imageName),
                thumbnailHeight: 50,
                renderItem: (props) => (
                  <>
                    <Img isJPG src={props.original} alt={props.description} />
                    <Box as="span" className="image-gallery-description">
                      {props.description}
                    </Box>
                  </>
                ),
                renderThumbInner: (props) => <Img isJPG src={props.original} />
              };
            }, [])
          ) as ReactImageGalleryItem[]
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
        renderLeftNav={useCallback(
          (onClick, disabled) => (
            <Button onClick={onClick} _type="icon-button" disabled={disabled} className="previous">
              <SVGIcon name="previous" />
            </Button>
          ),
          []
        )}
        renderRightNav={useCallback(
          (onClick, disabled) => (
            <Button onClick={onClick} _type="icon-button" disabled={disabled} className="next">
              <SVGIcon name="next" />
            </Button>
          ),
          []
        )}
      />

      <Box as="section" className={`${S.galleryGrid} mb-3 mt-5`}>
        {useMemo(() => galleryPhotos, []).map(
          useCallback(
            ({ imageName, description }, i) => (
              <RevealOnScroll
                delay={(i % 6) * 0.125}
                className={`${S.galleryGridItem} ${
                  activePhotoIndex === i ? S.galleryGridItemActive : ''
                }`}
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
                <Box as="p" className="w-100" data-anim="fadeIn">
                  <Box as="span" className="w-100">
                    {description || imageName}
                  </Box>
                </Box>
              </RevealOnScroll>
            ),
            [activePhotoIndex]
          )
        )}
      </Box>
    </Container>
  );
};

export default memo(MainGallery);

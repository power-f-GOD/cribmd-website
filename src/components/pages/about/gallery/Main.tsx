/* eslint-disable react/display-name */
import { memo, useEffect, useState, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { Box, Img, Button, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/gallery/index.module.scss';
import { GetImage, interval, delay } from 'src/utils';
import { galleryPhotos } from 'src/data/about/gallery';
import MainGalleryGrids from './Main.GalleryGrid';

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
      <Box lazy>
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
          showThumbnails={true}
          lazyLoad={true}
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
              <Button
                onClick={onClick}
                _type="icon-button"
                disabled={disabled}
                className="previous">
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
      </Box>

      <MainGalleryGrids />
    </Container>
  );
};

export default memo(MainGallery);

import { Box, Img, Anchor } from 'src/components/shared';
import { SyntheticEvent, useCallback } from 'react';
import styles from 'src/styles/pages/about/our-company/index.module.scss';

const Cta = (): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  return (
    <Box as="section">
      <Box className={`container ${styles.ctaContainer}`}>
        <Box className="row align-items-center">
          <Box className="col-12 col-md-7 px-0 px-md-3 ">
            <Box as="h2">Are you a doctor interested in joining our network?</Box>
            <Box as="p" className="secondary-content pe-md-5 me-md-5">
              From the comfort of your home, provide services to people and help save more lives.
            </Box>
            <Anchor
              className={`cta-btn bg-white btn-sm-lg ${styles.ctaBtn}`}
              href="https://www.cribmd.com/signup">
              Join Us
            </Anchor>
          </Box>
          <Box className="col-12 col-md-5">
            <Img
              srcSet={`/img/about/cta-laptop__500x.png 2x, /img/about/cta-laptop__250x.png 1x`}
              alt="cta image"
              onError={handleImgError}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cta;

import { SVG, Box, Img } from 'src/components/shared';
import styles from 'src/styles/pages/about/our-company/index.module.scss';
import { SyntheticEvent, useCallback } from 'react';
import Team from './Team';
import Doctor from './Doctor';
import Cta from './Cta';
const Main = (): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;

    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  return (
    <main>
      <Box className={styles.mainSection}>
        <Box as="section" className={`container ${styles.hasLayout}`}>
          <Box className="row justify-content-center align-items-center">
            <Box className="col-12 col-md-6 order-1 ">
              <Box className={` ${styles.missionPoster} ${styles.poster}`}>
                <Img
                  srcSet={`/img/about/boy-on-sofa__500x.png 2x, /img/about/boy-on-sofa__250x.png 1x`}
                  alt="boy on sofa"
                  className={styles.posterImg}
                  onError={handleImgError}
                />
                <SVG
                  className="d-none d-sm-block"
                  width="146"
                  height="146"
                  viewBox="0 0 146 146"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="146" height="146" rx="22" fill="#1971F5" fillOpacity="0.1" />
                </SVG>
                <SVG
                  className="d-block d-sm-none"
                  width="327"
                  height="90"
                  viewBox="0 0 327 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="-25.1992" y="0.781738" width="377.994" height="64.2183" fill="#F3F7FF" />
                </SVG>
                <SVG
                  className={`${styles.topLayer} d-block d-sm-none `}
                  width="63"
                  height="60"
                  viewBox="0 0 63 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M56.4665 12.374L46.7499 12.374V6.54406C46.7499 3.32544 44.1386 0.714111 40.92 0.714111L21.4868 0.714111C18.2682 0.714111 15.6569 3.32544 15.6569 6.54406V12.374H5.9403C2.72168 12.374 0.110352 14.9853 0.110352 18.2039L0.110352 53.1836C0.110352 56.4022 2.72168 59.0136 5.9403 59.0136H56.4665C59.6851 59.0136 62.2964 56.4022 62.2964 53.1836V18.2039C62.2964 14.9853 59.6851 12.374 56.4665 12.374ZM23.4301 8.48737L38.9766 8.48737V12.374H23.4301V8.48737ZM42.8633 38.6087C42.8633 39.1432 42.426 39.5804 41.8916 39.5804H35.09V46.382C35.09 46.9164 34.6528 47.3537 34.1184 47.3537H28.2884C27.754 47.3537 27.3168 46.9164 27.3168 46.382V39.5804H20.5152C19.9807 39.5804 19.5435 39.1432 19.5435 38.6087V32.7788C19.5435 32.2444 19.9807 31.8071 20.5152 31.8071H27.3168V25.0055C27.3168 24.4711 27.754 24.0339 28.2884 24.0339L34.1184 24.0339C34.6528 24.0339 35.09 24.4711 35.09 25.0055V31.8071H41.8916C42.426 31.8071 42.8633 32.2444 42.8633 32.7788V38.6087Z"
                    fill="#CFE1FC"
                  />
                </SVG>
              </Box>
            </Box>
            <Box className="col-12 col-md-6 my-2 order-0  text-md-left">
              <Box as="h2">Our Mission</Box>
              <Box className="secondary-content">
                Our mission is to democratize healthcare by delivering quality, affordable and
                accessible healthcare to everyone, irrespective of who they are. We want to ensure
                that patients have a say and a voice in what type of care they get, how and when
                they get the care and who gives the care. We understand the need for quality
                healthcare, especially in this times, and we are constantly evolving to meet the
                challenges of everyday healthcare, using state of the art technology to bridge the
                gap more than ever before.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box as="section" className={`container ${styles.hasLayout}`}>
          <Box className="row justify-content-center align-items-center">
            <Box className="col-12 col-md-6 my-2 order-md-1 text-md-left">
              <Box as="h2">Our Vision</Box>
              <Box className="secondary-content">
                CribMD is a diverse network of doctors, health workers and technology enthusiasts
                working to confront healthcare inequity through providing healthcare at every sector
                of society. Together, we are breaking bounds and setting new records in doctor home
                visits and telemedicine with the aim of becoming the preeminent and most reliable
                platform for getting medical care
              </Box>
            </Box>
            <Box className="col-12 col-md-6 order-0">
              <Box className={`${styles.visionPoster} ${styles.poster} float-right mt-3`}>
                <Img
                  srcSet={`/img/about/nurse-with-mask__500x.png 2x, /img/about/nurse-with-mask__250x.png 1x`}
                  alt="boy on sofa"
                  onError={handleImgError}
                />
                {/* visible only on large screens  */}

                <SVG
                  className="d-none d-sm-block"
                  width="146"
                  height="146"
                  viewBox="0 0 146 146"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="146" height="146" rx="22" fill="#651CBF" fillOpacity="0.1" />
                </SVG>

                {/* visible only on small screens  */}
                <SVG
                  className={`${styles.visionSvg} d-block d-sm-none`}
                  width="327"
                  height="90"
                  viewBox="0 0 327 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="-25.1992" y="0.781738" width="377.994" height="64.2183" fill="#F1EBFF" />
                </SVG>
                <SVG
                  className={`${styles.topLayer} ${styles.visionSvg} d-block d-sm-none `}
                  width="117"
                  height="129"
                  viewBox="0 0 117 129"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.7">
                    <path
                      opacity="0.7"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.5871 51.9908C18.7387 51.6716 26.3465 55.2624 27.0028 61.9491C27.4795 66.8076 27.3319 71.6521 28.0697 76.5034C28.6597 80.3805 29.9074 84.1024 31.6092 87.6341C33.2455 91.0303 36.6399 93.9212 37.5228 97.5493C38.0854 99.861 37.7705 103.113 36.9945 105.374C36.0508 108.124 36.5524 107.906 38.4327 110.213C42.1174 114.734 45.4352 119.37 47.7814 124.769C51.161 132.547 53.3767 141.637 52.1224 150.15C51.9628 151.231 51.7736 155.111 50.285 155.382C48.6224 155.685 49.3998 153.466 49.4886 152.75C50.0543 148.177 50.5569 144.179 49.8746 139.535C47.2416 121.615 34.3859 109.808 26.0152 94.5986C25.555 93.8143 24.5835 91.9466 23.9081 90.7145C22.8417 88.7692 21.7697 85.0677 20.3261 83.6253C17.6073 80.9079 20.1068 86.3708 20.6366 87.4137C21.3064 88.7329 22.0433 90.135 22.7297 91.2909C25.8703 96.6491 29.3758 102.498 32.6194 108.021C18.5911 111.218 8.71156 94.3528 4.94701 83.2652C1.84533 74.1302 -1.86573 52.7724 12.5871 51.9908Z"
                      fill="#651CBF"
                      fillOpacity="0.5"
                    />
                    <path
                      opacity="0.7"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M95.0362 35.0267C84.7526 35.8426 78.1507 42.6283 75.0775 52.1193C73.4212 57.2341 73.2313 62.4885 72.3109 67.7448C70.9263 75.6529 67.947 81.6459 62.1247 87.28C60.3213 89.0249 58.9924 90.8164 58.0477 92.7331C56.1723 94.6468 54.5399 96.8124 53.3405 99.46C51.8085 102.841 51.375 106.898 53.1438 110.269C53.6194 111.175 54.8059 112.995 56.0355 113.821C51.4318 123.626 48.9005 134.364 49.1858 145.089C49.3583 151.563 49.6743 158.039 50.043 164.505C50.1423 166.241 50.7077 169.108 51.5569 166.197C52.3341 163.533 51.3594 159.353 51.2692 156.57C50.8304 143.016 50.4553 130.692 56.0348 118.029C56.6198 116.702 57.2402 115.385 57.8863 114.079C57.9241 114.057 57.9594 114.031 57.995 114.005C58.0196 114.024 58.042 114.044 58.0666 114.063C58.1079 113.989 58.1644 113.902 58.2303 113.804C58.4156 113.613 58.5774 113.371 58.7313 113.101C59.2262 112.415 59.7862 111.61 59.7893 111.169C59.7893 111.165 59.7874 111.16 59.7874 111.156C63.2414 105.518 67.1975 100.191 71.2385 94.9673C71.2082 95.0053 75.6217 88.996 74.9392 92.3193C74.6103 93.9208 71.3639 96.9705 70.0528 98.6669C67.1524 102.441 63.7465 107.223 60.9162 111.846C60.5354 112.065 59.9973 113.14 59.6081 113.94C59.3933 114.346 59.1928 114.755 58.9958 115.111C69.0244 118.424 76.8256 111.75 82.1451 103.987C82.1515 103.978 82.1572 103.969 82.1633 103.96C83.7821 101.814 85.4403 99.6846 87.512 97.989C90.9683 95.1596 94.6697 94.6605 98.7448 93.268C109.858 89.4709 114.583 75.0684 116.084 64.3817C117.777 52.3253 109.495 33.8379 95.0362 35.0267Z"
                      fill="#651CBF"
                    />
                    <path
                      opacity="0.7"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M74.7232 1.2639C64.1688 12.2487 59.0697 27.4848 55.0321 41.8082C50.5226 57.806 47.5441 74.0507 47.4297 90.6835C47.3548 101.611 47.0575 112.607 47.6954 123.523C47.9216 127.399 48.3081 131.282 48.9225 135.117C48.9731 135.432 50.3478 143.995 51.6631 142C52.4112 140.865 50.254 133.117 50.091 131.827C49.1741 124.559 48.961 117.237 49.0057 109.916C49.0792 97.8627 48.7238 85.871 49.9455 73.8619C50.1276 72.0689 50.2718 70.1856 50.6977 68.4316C51.1498 66.5668 50.5739 67.3808 52.0469 66.6426C53.4781 65.9248 55.2467 66.0273 56.7317 65.127C62.622 61.5552 65.6352 52.3806 67.9804 46.3608C70.6627 39.4768 72.2929 32.1361 73.5951 24.8917C74.5511 19.5691 75.2347 14.2788 75.6216 8.88765C75.7434 7.18854 75.7507 5.41173 76.0846 3.74104C76.1745 3.29038 76.6259 2.49316 76.6095 2.09406C76.5749 1.24941 76.065 0.752651 76.0233 0.0429048C75.5815 0.440515 75.1477 0.847807 74.7232 1.2639Z"
                      fill="#651CBF"
                    />
                    <path
                      opacity="0.7"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M52.7048 147.723H50.9668C51.0874 145.543 51.2467 143.366 51.6112 141.21C53.0055 132.963 57.3651 120.85 66.9267 119.511C67.2794 119.461 68.577 119.453 70.1488 119.545C70.8937 119.129 71.7282 118.877 72.6074 118.819C80.7481 118.219 89.8394 124.787 93.7662 131.621C96.9318 137.132 96.3985 144.368 94.4433 150.222C93.1339 154.141 90.2763 159.73 85.5109 159.784C79.5488 159.852 79.2613 152.483 79.146 148.176C78.9928 142.448 78.2691 137.459 73.7562 133.555C72.7045 132.646 71.5548 131.846 70.4924 130.949C68.8288 129.545 66.9904 128.108 66.7761 125.786C66.4803 122.582 68.2887 122.006 71.05 122.601C71.5207 122.702 76.2622 124.83 75.5602 123.148C75.3459 122.634 74.563 122.227 73.5749 121.922C71.0181 121.644 67.969 121.322 67.0921 121.514C57.6317 123.59 53.9484 136.694 52.9702 145.02C52.8647 145.919 52.7793 146.82 52.7048 147.723Z"
                      fill="#651CBF"
                      fillOpacity="0.5"
                    />
                  </g>
                </SVG>
              </Box>
            </Box>
          </Box>
        </Box>
        <Team />
        <Doctor />
        <Cta />
      </Box>
    </main>
  );
};

export default Main;

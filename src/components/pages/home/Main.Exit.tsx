/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, Img, Anchor, RevealOnScroll } from 'src/components/shared';
import { servicesIllustrations } from 'src/data/home';
import { GetImage } from 'src/utils';
import { AppWindowContext } from 'src/pages/_app';

const MainExit = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isMobile = windowWidth < 768;

  return (
    <Container className="shrink-max-width-xxl">
      {servicesIllustrations.map(
        ({ buttonText, anchorHref: buttonUrl, heading, imageName, p1, rider, p2, p3 }, i) => (
          <Row key={heading} className="my-5 align-items-center pb-3 pb-md-2">
            <RevealOnScroll component={Col} xs={12} md={6} easing="ease" allowOverflow>
              <Box as="h3" className="h6 theme-tertiary mt-0">
                {heading}
              </Box>
              <Box as="h4" className="h3">
                {rider}
              </Box>
              <Box as="p">{p1}</Box>
              <Box as="p">{p2}</Box>
              <Box>
                {p3 && (
                  <Box as="section" className={`${S.covidConcernsCard} mb-4`}>
                    <Box as="h5" className="mb-2 h6 mt-1">
                      Covid concerns?
                      <span role="img" aria-label="light-bulb">
                        💡
                      </span>
                    </Box>
                    <Box as="p" className="my-2">
                      {p3}
                    </Box>
                  </Box>
                )}
              </Box>

              <Box data-anim_delay={isMobile ? 0.75 : 1.25} data-anim="fadeIn">
                <Anchor button href={buttonUrl} variant="outlined">
                  {buttonText}
                </Anchor>
              </Box>
            </RevealOnScroll>

            <RevealOnScroll
              component={Col}
              xs={12}
              md={6}
              className="text-center text-md-end ps-md-5"
              easing="ease"
              animName={i % 2 === 0 ? 'fadeInRight' : 'fadeInLeft'}
              delay={isMobile ? 0 : 0.3}>
              <Img
                src={GetImage.home(imageName)}
                className={`mt-5 mt-md-0 ${i === 0 ? 'with-frame' : ''}`.trim()}
                alt={`image of ${imageName.replace('-', ' ')}`}
              />
            </RevealOnScroll>
          </Row>
        )
      )}
    </Container>
  );
};

export default MainExit;

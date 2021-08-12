/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Container, Row, Col } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, Img, Anchor, RevealOnScroll } from 'src/components/shared';
import { servicesIllustrations } from '../../../data/home';
import { GetImage } from 'src/utils';

const MainExit = (): JSX.Element => {
  return (
    <Container className="shrink-max-width-xxl">
      {servicesIllustrations.map(
        ({ buttonText, buttonUrl, heading, imageName, p1, rider, p2, p3 }, i) => (
          <Row key={heading} className="my-5 align-items-center pb-3 pb-md-2">
            <Col xs={12} md={6}>
              <RevealOnScroll easing="ease" duration={0.75}>
                <Box as="h3" className="h6 theme-tertiary mt-0" data-anim="fadeInDown">
                  {heading}
                </Box>
                <Box as="h4" className="h3" data-anim="fadeInDown">
                  {rider}
                </Box>
                <Box as="p" data-anim="fadeInDown">
                  {p1}
                </Box>
                <Box as="p">{p2}</Box>
                <Box data-anim="fadeInUp">
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
              </RevealOnScroll>

              <RevealOnScroll allowOverflow>
                <Anchor
                  button
                  href={buttonUrl}
                  variant="outlined"
                  data-anim_delay={0.6}
                  data-anim="fadeIn">
                  {buttonText}
                </Anchor>
              </RevealOnScroll>
            </Col>

            <RevealOnScroll
              component={Col}
              xs={12}
              md={6}
              className="text-center text-md-end ps-md-5"
              easing="ease"
              animName="fadeInRight">
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

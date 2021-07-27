/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import S from 'src/styles/pages/home/Main.module.scss';
import { Box, SVGIcon, RevealOnScroll, Img, Anchor } from 'src/components/shared';
import { TransitionAnimName } from 'src/types';
import { ourServices, servicesIllustrations } from './data';
import { AppWindowContext } from 'src/pages/_app';
import { GetImage } from 'src/utils';

const MainBody = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <>
      <Container fluid className={`${S.servicesWrapper} text-left text-md-center`}>
        {/* Our Services */}
        <RevealOnScroll>
          <Container as="h2" className="pt-4">
            Our Services
          </Container>
        </RevealOnScroll>
        <RevealOnScroll component={Container} className="px-0 px-lg-5 reset-max-width-xl">
          <Box as="p" className="px-0 px-md-4 px-lg-5">
            Getting treatment and medical assistance with Telemedicine and Doctor Home Visit has
            never been so fast and seamless. At CribMD, we use cutting-edge technology to offer
            low-cost healthcare plans that enable you and your family access to comprehensive and
            convenient healthcare services.
          </Box>
        </RevealOnScroll>

        <Container className="shrink-max-width-xxl">
          <Row>
            <Col className="d-flex flex-column px-0 ps-0 ps-lg-5 text-start mt-0 mt-md-5">
              {ourServices.map((service, i) => (
                <RevealOnScroll
                  key={service.name}
                  className={`mt-4 d-flex justify-content-${
                    i % 2 === 1 ? 'end' : 'start'
                  } justify-content-md-start`}
                  allowOverflow>
                  <Box
                    className={`${S.serviceCard}`}
                    data-anim={`fadeIn${i % 2 === 0 ? 'Right' : 'Left'}` as TransitionAnimName}
                    data-anim_easing="ease">
                    <Box>
                      <SVGIcon name={service.icon} size="medium" />
                      <Box as="h4" className="my-2 h5">
                        {service.name}
                      </Box>
                    </Box>
                    <Box as="p">{service.description}</Box>
                  </Box>
                </RevealOnScroll>
              ))}
            </Col>
            {windowWidth > 767 && (
              <Col className="d-none d-md-flex align-items-center justify-content-end">
                <RevealOnScroll allowOverflow>
                  <Img src={GetImage.home('phone-with-doctors-list')} />
                </RevealOnScroll>
              </Col>
            )}
          </Row>
        </Container>
      </Container>

      {/* Services illustrations */}
      <Container className="shrink-max-width-xxl">
        {servicesIllustrations.map(
          ({ buttonText, buttonUrl, heading, imageName, p1, rider, p2, p3 }, i) => (
            <Row key={heading} className="my-5 align-items-center">
              <Col xs={12} md={6}>
                <Box as="h3" className="h6 theme-tertiary mt-0">
                  {heading}
                </Box>
                <Box as="h4" className="h2">
                  {rider}
                </Box>
                <Box as="p">{p1}</Box>
                <Box as="p">{p2}</Box>
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
                <Anchor button href={buttonUrl} variant="outlined">
                  {buttonText}
                </Anchor>
              </Col>

              <Col xs={12} md={6} className="text-center text-md-end ps-md-5">
                <Img
                  src={GetImage.home(imageName)}
                  className={`mt-5 mt-md-0 ${i === 0 ? 'with-frame' : ''}`.trim()}
                  alt={`image of ${imageName.replace('-', ' ')}`}
                />
              </Col>
            </Row>
          )
        )}
      </Container>
    </>
  );
};

export default memo(MainBody);

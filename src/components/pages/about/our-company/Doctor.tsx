import { Box, Img, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { SyntheticEvent, useCallback } from 'react';
import { doctorsData } from './data';
import { Col, Container, Row } from 'react-bootstrap';
const Doctor = (): JSX.Element => {
  const handleImgError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    if (/\.webp/.test(target.srcset)) target.srcset = target.srcset.replaceAll('.webp', '.png');
  }, []);

  return (
    <Container as="section" className="mt-5">
      <RevealOnScroll className={S.doctorsContainer}>
        <RevealOnScroll once>
          <Row className="justify-content-center align-self-center ">
            <Col xs={12} md={6}>
              <RevealOnScroll>
                <Box as="h2" className="mt-md-5 pt-md-3" data-anim_delay="0.3">
                  Meet Our Doctors
                </Box>
              </RevealOnScroll>
              <RevealOnScroll>
                <Box as="p" className="mb-3 secondary-content" data-anim_delay="0.6">
                  Meet the team whose dedication and professionalism brings health care to your
                  doorstep.
                </Box>
              </RevealOnScroll>
              {doctorsData.slice(0, 2).map((doctor) => (
                <RevealOnScroll key={doctor.name}>
                  <Box
                    className={`${S.doctorContainer} ${S['bg' + doctor.backgroundColor]}`}
                    data-anim_delay="0.9">
                    <RevealOnScroll
                      allowOverflow
                      className="d-flex justify-content-between py-4"
                      delay={1.1}>
                      <Box data-anim="fadeInRight">
                        <Img
                          srcSet={`${doctor.imageUrl}, ${doctor.imageUrl}`}
                          alt="doctor image"
                          onError={handleImgError}
                        />
                      </Box>

                      <Box data-anim="fadeInLeft">
                        <Box as="p" className={`${S.role} `}>
                          {doctor.role}
                        </Box>
                      </Box>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Box as="h6" data-anim_delay="0.3">
                        {doctor.name}
                      </Box>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Box as="span" className="tertiary-content" data-anim_delay="0.6">
                        {doctor.occupation}
                      </Box>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Box className="secondary-content" data-anim_delay="0.6">
                        <p>{doctor.content}</p>
                      </Box>
                    </RevealOnScroll>
                  </Box>
                </RevealOnScroll>
              ))}
            </Col>
            <Col xs={12} md={6}>
              {doctorsData.slice(2).map((doctor) => (
                <RevealOnScroll key={doctor.name}>
                  <Box
                    className={`${S.doctorContainer} ${S['bg' + doctor.backgroundColor]}`}
                    data-anim_delay="0.9">
                    <RevealOnScroll
                      allowOverflow
                      className="d-flex justify-content-between py-4"
                      delay={1.1}>
                      <Box data-anim="fadeInRight">
                        <Img
                          srcSet={`${doctor.imageUrl}, ${doctor.imageUrl}`}
                          alt="doctor image"
                          onError={handleImgError}
                        />
                      </Box>

                      <Box data-anim="fadeInLeft">
                        <Box as="p" className={`${S.role} `}>
                          {doctor.role}
                        </Box>
                      </Box>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Box as="h6" data-anim_delay="0.3">
                        {doctor.name}
                      </Box>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Box as="span" className="tertiary-content" data-anim_delay="0.6">
                        {doctor.occupation}
                      </Box>
                    </RevealOnScroll>
                    <RevealOnScroll>
                      <Box className="secondary-content" data-anim_delay="0.6">
                        <p>{doctor.content}</p>
                      </Box>
                    </RevealOnScroll>
                  </Box>
                </RevealOnScroll>
              ))}
            </Col>
          </Row>
        </RevealOnScroll>
      </RevealOnScroll>
    </Container>
  );
};

export default Doctor;

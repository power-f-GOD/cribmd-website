import { Box, RevealOnScroll, Anchor, SVGIcon, Avatar } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { doctorsData } from 'src/data';
import { Container } from 'react-bootstrap';
import { GetImage } from 'src/utils';
import { useCallback, useMemo } from 'react';

const MainExit = (): JSX.Element => {
  return (
    <Container as="section" className="mt-5 pt-md-5 shrink-max-width-xxl">
      <Box className={`${S.doctorsGrid} mt-md-5 mx-0`}>
        <RevealOnScroll easing="ease" className={`${S.headingText}`}>
          <Box as="h2" className="mt-0 mb-3">
            Meet Our Doctors
          </Box>
          <Box as="p" className={`my-0 secondary-content`}>
            Meet the team whose dedication and professionalism brings health care to your doorstep.
          </Box>
        </RevealOnScroll>

        {useMemo(() => doctorsData, []).map(
          useCallback(
            (doctor, i) => (
              <Box
                lazy
                key={doctor.name}
                className={`${S.doctorGridItem} ${S[`box${i + 1}`]} ${
                  S['bg' + doctor.backgroundColor]
                }`}>
                <RevealOnScroll
                  allowOverflow
                  className="d-flex justify-content-between pb-3"
                  delay={0.25}
                  easing="ease">
                  <Box data-anim="fadeInRight">
                    <Avatar
                      isJPG
                      src={`${GetImage.doctors(doctor.imageName)}`}
                      alt="doctor image"
                      elevation="1"
                      size="small"
                    />
                  </Box>

                  <Box
                    as="span"
                    className={`${S.doctorRole} align-self-start`}
                    data-anim="fadeInLeft">
                    {doctor.role}
                  </Box>
                </RevealOnScroll>

                <RevealOnScroll easing="ease">
                  <Box as="h3" className="h6 mt-0 mb-0">
                    {doctor.name}
                  </Box>
                  <Box as="p" className="tertiary-content my-0 mb-3 mx-0">
                    {doctor.occupation}
                  </Box>
                  <Box as="p" className="secondary-content mb-0 mt-0">
                    {doctor.content}
                  </Box>
                </RevealOnScroll>
              </Box>
            ),
            []
          )
        )}

        <Anchor
          href="https://app.cribmd.com/login?rURL=patient/doctors-list"
          className={`${S.moreDoctorsLink} d-inline-flex align-items-center`}>
          See all doctors <SVGIcon name="next" color="red" className="ms-2" />
        </Anchor>
      </Box>
    </Container>
  );
};

export default MainExit;

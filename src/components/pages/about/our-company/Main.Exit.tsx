import { Box, Img, RevealOnScroll, Anchor, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { doctorsData } from './data';
import { Container } from 'react-bootstrap';

const MainExit = (): JSX.Element => {
  return (
    <Container as="section" className="mt-md-5 pt-md-5 shrink-max-width-xxl">
      <Box className={`${S.doctorsGrid} mt-md-5 mx-0`}>
        <RevealOnScroll easing="ease" className={`${S.introText}`}>
          <Box as="h2" className="my-3">
            Meet Our Doctors
          </Box>
          <Box as="p" className={`mt-0 secondary-content`} data-anim_delay="0.6">
            Meet the team whose dedication and professionalism brings health care to your doorstep.
          </Box>
        </RevealOnScroll>

        {doctorsData.map((doctor, i) => (
          <RevealOnScroll
            key={doctor.name}
            className={`${S.doctorGridItem} ${S[`box${i + 1}`]} ${
              S['bg' + doctor.backgroundColor]
            }`}
            easing="ease">
            <RevealOnScroll
              allowOverflow
              className="d-flex justify-content-between pb-4"
              delay={0.25}
              easing="ease">
              <Box data-anim="fadeInRight">
                <Img srcSet={`${doctor.imageUrl}, ${doctor.imageUrl}`} alt="doctor image" />
              </Box>

              {/* <Box> */}
              <Box as="span" className={`${S.role} align-self-start`} data-anim="fadeInLeft">
                {doctor.role}
              </Box>
              {/* </Box> */}
            </RevealOnScroll>

            <Box as="h3" className="h6" data-anim_delay="0.5">
              {doctor.name}
            </Box>
            <Box as="p" className="tertiary-content" data-anim_delay="0.6">
              {doctor.occupation}
            </Box>
            <Box as="p" className="secondary-content" data-anim_delay="0.7">
              {doctor.content}
            </Box>
          </RevealOnScroll>
        ))}

        <Anchor
          href="https://app.cribmd.com/patient/doctors-list"
          className={`${S.moreDoctorsLink} d-inline-flex align-items-center`}>
          See all doctors <SVGIcon name="next" color="red" className="ms-2" />
        </Anchor>
      </Box>
    </Container>
  );
};

export default MainExit;

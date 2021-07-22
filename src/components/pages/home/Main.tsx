import { Container } from 'react-bootstrap';

import { Box, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/index/Main.module.scss';

const Main = (): JSX.Element => {
  return (
    <Container as="main" className="my-5">
      <Box as="h2" className="h3 text-md-center pt-md-5">
        Thousands of doctors at your beck and call
      </Box>
      <Box as="p" className="text-md-center mb-md-5">
        Get access to highly qualified doctors on CribMD!
        <br />
        Don’t risk your health by relying on self-medication or amateur advice.
      </Box>
      <Box as="section" className={S.specializationsGrid}>
        <Box className="p-4 px-3">
          <SVGIcon name="wave" size="medium" />
          <Box as="span">Dermatologist</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="smiley" size="medium" />
          <Box as="span">Pediatrician</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="cross" size="medium" />
          <Box as="span">General Practice</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="girl" size="medium" />
          <Box as="span">Gynecologist</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="eye" size="medium" />
          <Box as="span">Optometry</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="users" size="medium" />
          <Box as="span">Family Medicine</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="blood" size="medium" />
          <Box as="span">Endocrinology</Box>
        </Box>
        <Box className="p-4 px-3">
          <SVGIcon name="heart" size="medium" />
          <Box as="span">Cardiology</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Main;

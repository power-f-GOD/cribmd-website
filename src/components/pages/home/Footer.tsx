// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter

import { Box } from 'src/components/shared';

const Footer = (): JSX.Element => {
  return (
    <Box as="footer">
      <h6>This is the Footer component!</h6>
    </Box>
  );
};

export default Footer;

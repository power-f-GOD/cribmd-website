// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter

import { Container } from 'react-bootstrap';
import { OurInvestors, OurPartners } from 'src/components/shared';

const Footer = (): JSX.Element => {
  return (
    <Container>
      <OurInvestors />
      <OurPartners />
    </Container>
  );
};

export default Footer;

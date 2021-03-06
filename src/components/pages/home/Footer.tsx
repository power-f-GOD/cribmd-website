// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Container } from 'react-bootstrap';

import { OurInvestors, OurPartners, CustomerTestimonies } from 'src/components/shared';
import { GetMobileAppCard } from 'src/components';

const Footer = (): JSX.Element => {
  return (
    <Container as="footer">
      <CustomerTestimonies />
      <OurInvestors />
      <OurPartners />
      <GetMobileAppCard />
    </Container>
  );
};

export default Footer;

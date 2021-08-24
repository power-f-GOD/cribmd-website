// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter

import { Container } from 'react-bootstrap';
import { OurInvestors, OurPartners } from 'src/components/shared';
import { GetMobileAppCard } from 'src/components/shared/GetMobileAppCard';

const Footer = (): JSX.Element => {
  return (
    <Container>
      <GetMobileAppCard
        headerText="Book a doctor appointment in less than 2 minutes via our mobile app"
        bodyText="Start using CribMD Mobile right away"
      />
      <OurInvestors />
      <OurPartners />
    </Container>
  );
};

export default Footer;

// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter

import { Container } from 'react-bootstrap';
import { GetMobileAppCard } from 'src/components';

const Footer = (): JSX.Element => {
  return (
    <Container as="footer">
      <GetMobileAppCard />
    </Container>
  );
};

export default Footer;

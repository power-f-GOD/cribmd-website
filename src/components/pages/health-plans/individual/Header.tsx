import { Container } from 'react-bootstrap';
import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <Container className="px-md-4">
      <PageHeader
        headerText=" Do you need affordable health plans for yourself and your family?"
        ctaText="Subscribe Now"
        ctaHref="https://app.cribmd.com/signup?rURL=patient/subscribe"
        rider=" We are committed to giving you affordable and quality medical treatment. We have  got the perfect solution for you!"
      />
    </Container>
  );
};

export default Header;

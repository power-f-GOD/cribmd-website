import { Container } from 'react-bootstrap';
import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <Container className="px-md-5">
      <PageHeader
        headerText="Are you a business? <br />We have the right health plans for you!"
        ctaText="Subscribe Now"
        ctaHref="https://www.cribmd.com/signup"
        rider="Our Individual health plan offers various healthcare coverage options to suit
        different budgets. You can choose between our basic, premium or family
        plans all focused on delivering a remarkable healthcare experience."
      />
    </Container>
  );
};

export default Header;

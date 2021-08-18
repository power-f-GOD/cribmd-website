import { Container } from 'react-bootstrap';
import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <Container className="px-md-4">
      <PageHeader headerText="Gallery" rider="See our achievements and picture displays!" />
    </Container>
  );
};

export default Header;

import { Container } from 'react-bootstrap';
import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <Container className="px-md-4">
      <PageHeader
        headerText="Inside CribMD"
        rider="Catch the latest news about CribMD, see our achievements and see our picture
        displays"
      />
    </Container>
  );
};

export default Header;

import { Container } from 'react-bootstrap';
import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <Container className="px-md-4">
      <PageHeader headerText="CribMD in the News" rider="Catch the latest news about CribMD!" />
    </Container>
  );
};

export default Header;

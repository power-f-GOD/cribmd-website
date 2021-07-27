/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo } from 'react';
import { Container } from 'react-bootstrap';

import { OurInvestors, OurPartners } from 'src/components/shared';

const MainExit = (): JSX.Element => {
  return (
    <Container className={``}>
      <OurInvestors />
      <OurPartners />
    </Container>
  );
};

export default memo(MainExit);

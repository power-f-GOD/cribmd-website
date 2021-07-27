/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo } from 'react';
import { Container } from 'react-bootstrap';

const _OurInvestors = (): JSX.Element => {
  return <Container fluid className={``}></Container>;
};

export const OurInvestors = memo(_OurInvestors);

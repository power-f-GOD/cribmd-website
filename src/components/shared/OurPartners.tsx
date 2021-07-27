/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { memo } from 'react';
import { Container } from 'react-bootstrap';

const _OurPartners = (): JSX.Element => {
  return <Container fluid className={``}></Container>;
};

export const OurPartners = memo(_OurPartners);

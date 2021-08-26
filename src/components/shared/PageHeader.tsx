import { memo, FC, ReactNode } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { Anchor, Box, RevealOnScroll } from 'src/components/shared';

const _PageHeader: FC<{
  ctaHref?: string;
  ctaText?: string;
  headerText: string;
  rider?: string;
  children?: ReactNode;
}> = ({ ctaHref, ctaText, headerText, rider, children }): JSX.Element => {
  return (
    <Container fluid as="header" className={`PageHeader ${ctaHref || rider ? 'has-cta' : ''}`}>
      <Container className="text-md-center px-md-3">
        <Row className="justify-content-md-center my-3 my-md-5">
          <RevealOnScroll
            component={Col}
            xs={12}
            className="pt-3"
            easing="ease"
            allowOverflow={ctaHref ? true : false}>
            <Box
              as="h1"
              data-anim_delay="0.2"
              className="my-4 mx-auto shrink-max-width-xxl"
              data-anim_easing="ease"
              dangerouslySetInnerHTML={{ __html: headerText }}
            />

            {rider && (
              <Box
                as="p"
                data-anim_delay={0.5}
                className="mx-md-auto px-md-5 py-1 my-3 my-lg-4  shrink-max-width-xxl"
                dangerouslySetInnerHTML={{ __html: rider }}
              />
            )}

            {ctaHref && (
              <Box data-anim_delay={0.8}>
                <Anchor
                  button
                  cta
                  variant="contained"
                  color="primary"
                  className="cta-btn ms-0 ms-lg-2"
                  href={ctaHref}>
                  {ctaText}
                </Anchor>
              </Box>
            )}
          </RevealOnScroll>

          {children && (
            <Col>
              <RevealOnScroll className="pt-3">{children}</RevealOnScroll>
            </Col>
          )}
        </Row>
      </Container>
      <Box className="__after">
        <Box className="__blurred-ellipse" />
        <Box className="__blurred-ellipse" />
      </Box>
    </Container>
  );
};

export const PageHeader = memo(_PageHeader);

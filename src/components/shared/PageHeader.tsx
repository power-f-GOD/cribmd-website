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
    <Container fluid as="header" className={`PageHeader ${ctaHref ? 'has-cta' : ''}`}>
      <Container className="text-md-center">
        <Row className="justify-content-md-center my-3">
          <Col xs={12}>
            <RevealOnScroll className="pt-3" easing="ease">
              <Box
                as="h1"
                data-anim_delay="0.2"
                className="my-4"
                data-anim_easing="ease"
                dangerouslySetInnerHTML={{ __html: headerText }}
              />

              {rider && (
                <Box
                  as="p"
                  data-anim_delay={0.5}
                  className="mx-md-auto px-md-5 py-1 my-3 my-lg-4"
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
          </Col>
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

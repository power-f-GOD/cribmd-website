import { memo, FC, ReactNode } from 'react';

import { Col, Container } from 'react-bootstrap';

import { Anchor, Box, RevealOnScroll, LazyBox } from 'src/components/shared';

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
        <LazyBox className="justify-content-md-center my-3 my-md-5 row">
          <RevealOnScroll
            component={Col}
            xs={12}
            className="pt-3"
            allowOverflow={ctaHref ? true : false}
            easing="ease">
            <Box
              as="h1"
              className="my-4 mx-auto shrink-max-width-xxl"
              dangerouslySetInnerHTML={{ __html: headerText }}
            />

            {rider && (
              <Box
                as="p"
                data-anim_delay={0.3}
                className="mx-md-auto px-md-5 py-1 my-3 my-lg-4  shrink-max-width-xxl"
                dangerouslySetInnerHTML={{ __html: rider }}
              />
            )}

            {ctaHref && (
              <Box data-anim_delay={0.6}>
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
        </LazyBox>
      </Container>
      <Box className="__after">
        <Box className="__blurred-ellipse" />
        <Box className="__blurred-ellipse" />
      </Box>
    </Container>
  );
};

export const PageHeader = memo(_PageHeader);

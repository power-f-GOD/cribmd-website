import { memo, FC } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { Anchor, Box, RevealOnScroll } from 'src/components/shared';

const _PageHeader: FC<{ ctaHref?: string; ctaText?: string; headerText: string; rider?: string }> =
  ({ ctaHref, ctaText, headerText, rider, children }): JSX.Element => {
    return (
      <Container fluid as="header" className="PageHeader">
        <Container className="text-md-center">
          <Row className="justify-content-md-center my-3">
            <Col xs={12}>
              <RevealOnScroll className="pt-3">
                <Box as="h1" data-anim_delay="0.2" className="mb-4">
                  {headerText}
                </Box>

                {rider && (
                  <Box
                    as="p"
                    data-anim_delay={0.5}
                    className="mx-md-auto px-md-5 py-1 my-3 my-lg-4">
                    {rider}
                  </Box>
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
      </Container>
    );
  };

export const PageHeader = memo(_PageHeader);

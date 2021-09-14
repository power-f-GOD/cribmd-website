import { memo, useContext, useCallback, useMemo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  Anchor,
  Box,
  CustomerTestimonies,
  Img,
  RevealOnScroll,
  SVGIcon
} from 'src/components/shared';
import { corporateProcessData } from 'src/data';
import { GetImage } from 'src/utils';
import { AppWindowContext } from 'src/pages/_app';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';

const MainBody = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  const handleRenderList = useCallback(
    (text) => (
      <Box className="d-flex align-items-start" as="p" key={text}>
        <SVGIcon name="check-circle" size="inherit" className="me-2 my-2" />
        <Box as="span">{text}</Box>
      </Box>
    ),
    []
  );

  return (
    <>
      {/* how it works section */}
      <RevealOnScroll component={Container} className="mt-5 shrink-max-width-xxl">
        <Box as="h2" className="mb-md-4 pt-md-3">
          How it works
        </Box>
      </RevealOnScroll>

      <Container className={`shrink-max-width-xxl`}>
        {useMemo(() => corporateProcessData, []).map(
          useCallback(
            ({ heading, p1, p2, buttonText, buttonURL, imageName, list }, i) => (
              <Row key={heading} className="my-3 my-md-5 align-items-center py-md-4 py-3">
                <RevealOnScroll
                  component={Col}
                  xs={12}
                  md={6}
                  allowOverflow
                  className={`${i % 2 === 0 ? '' : 'order-md-1'}`}>
                  <Box as="h3" className="h5">
                    <Box as="small" className="theme-tertiary-lighter">
                      0{i + 1}
                    </Box>
                    <br />
                    <Box as="span">{heading}</Box>
                  </Box>
                  <Box>{p1 && <Box as="p">{p1}</Box>}</Box>

                  {list?.map(handleRenderList)}

                  {p2 && (
                    <Box as="p" className={`${S.processOptionCard}`}>
                      <span role="img" aria-label="light-bulb" className="me-2">
                        💡
                      </span>
                      {p2}
                    </Box>
                  )}

                  {buttonURL && (
                    <Box data-anim="fadeInRight">
                      <Anchor button href={buttonURL} variant="outlined">
                        {buttonText}
                      </Anchor>
                    </Box>
                  )}
                </RevealOnScroll>

                <RevealOnScroll
                  component={Col}
                  xs={12}
                  md={6}
                  className={`text-center ${
                    i % 2 === 0 ? 'ps-md-5 text-md-end' : 'pe-md-5 text-md-start'
                  }`}
                  delay={windowWidth < 768 ? 0 : 0.65}
                  allowOverflow>
                  <Img
                    src={GetImage.corporate(imageName)}
                    width="450"
                    height="420"
                    className={`mt-5 mt-md-0`.trim()}
                    alt={`image of ${imageName.replace('-', ' ')}`}
                  />
                </RevealOnScroll>
              </Row>
            ),
            [windowWidth, handleRenderList]
          )
        )}
      </Container>

      <CustomerTestimonies />
    </>
  );
};

export default memo(MainBody);

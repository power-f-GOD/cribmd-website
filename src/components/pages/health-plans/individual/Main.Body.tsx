import { memo, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Anchor, Box, Img, RevealOnScroll, SVGIcon } from 'src/components/shared';
import { processData } from './data';
import { GetImage } from 'src/utils';
import { AppWindowContext } from 'src/pages/_app';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';

const MainBody = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <>
      {/* how it works section */}
      <RevealOnScroll easing="ease" component={Container} className="my-md-5">
        <Box as="h2">How it works</Box>
      </RevealOnScroll>

      <Container>
        {processData.map(({ heading, list, p1, p2, p3, p4, buttonText, imageName }, i) => (
          <Row key={heading} className="my-3 my-md-5 align-items-cent py-md-4 py-3">
            <RevealOnScroll
              component={Col}
              xs={12}
              md={6}
              easing="ease"
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

              {list?.map((text) => (
                <Box className="d-flex align-items-start" as="p" key={text}>
                  <SVGIcon name="check-circle" size="inherit" className="me-2 mt-1" />

                  <Box as="span">{text}</Box>
                </Box>
              ))}

              {p2 && <Box as="p">{p2}</Box>}

              {p3 && (
                <Box as="p" className={`${S.processOptionCard}`}>
                  <span role="img" aria-label="light-bulb" className="me-2">
                    💡
                  </span>
                  {p3}
                </Box>
              )}

              {p4 && <Box as="p">{p4}</Box>}

              {buttonText && (
                <Box data-anim="fadeInRight">
                  <Anchor button href="https://www.cribmd.com/patient/subscribe" variant="outlined">
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
                i % 2 === 0 ? 'ps-md-4 text-md-end' : 'pe-md-4 text-md-start'
              }`}
              easing="ease"
              delay={windowWidth < 768 ? 0 : 0.65}
              allowOverflow>
              <Img
                src={GetImage.home(imageName)}
                className={`mt-5 mt-md-0`.trim()}
                alt={`image of ${imageName.replace('-', ' ')}`}
              />
            </RevealOnScroll>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default memo(MainBody);

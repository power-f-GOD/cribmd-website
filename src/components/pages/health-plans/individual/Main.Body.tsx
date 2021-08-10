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
      <RevealOnScroll component={Container} className="mb-md-5 pb-md-5">
        <Box as="h2" data-anim_delay="0.3">
          How it works
        </Box>
      </RevealOnScroll>

      <Container>
        {processData.map(
          (
            {
              heading,
              list1,
              list2,
              list3,
              p1,
              p2,
              p3,
              p4,
              buttonText,
              buttonUrl,
              pcImageName,
              mobileImageName,
              imageOrder,
              contentOrder
            },
            i
          ) => (
            <Row key={heading} className="my-5 align-items-center pb-3 pb-md-2">
              <RevealOnScroll
                component={Col}
                xs={12}
                md={6}
                easing="ease"
                duration={0.75}
                allowOverflow
                className={` order-md-${contentOrder}  `}>
                <Box as="h3" className="h5" data-anim="fadeInDown">
                  {heading}
                </Box>
                <Box data-anim="fadeInUp">{p1 && <Box as="p">{p1}</Box>}</Box>
                <RevealOnScroll>
                  <Box data-anim="fadeInRight" className="align-items-center" data-anim_delay="0.2">
                    {list1 && (
                      <Box className="d-flex">
                        <Box className="me-2">
                          <SVGIcon name="check-circle" size="inherit" />
                        </Box>

                        <Box>{list1}</Box>
                      </Box>
                    )}
                  </Box>
                  <Box data-anim="fadeInRight" data-anim_delay="0.4">
                    {list2 && (
                      <Box className="d-flex">
                        <Box className="me-2">
                          <SVGIcon name="check-circle" size="inherit" />
                        </Box>

                        <Box>{list2}</Box>
                      </Box>
                    )}
                  </Box>
                  <Box data-anim="fadeInRight" data-anim_delay="0.6">
                    {list3 && (
                      <Box className="d-flex">
                        <Box className="me-2">
                          <SVGIcon name="check-circle" size="inherit" />
                        </Box>

                        <Box>{list3}</Box>
                      </Box>
                    )}
                  </Box>
                </RevealOnScroll>
                <Box data-anim="fadeInUp">{p2 && <Box as="p">{p2}</Box>}</Box>
                <Box data-anim="fadeInUp">
                  {p3 && (
                    <Box className={`${S.processOptionCard}`}>
                      <Box as="p">
                        <span role="img" aria-label="light-bulb" className="me-2">
                          💡
                        </span>
                        {p3}
                      </Box>
                    </Box>
                  )}
                </Box>
                <Box data-anim="fadeInUp">{p4 && <Box as="p">{p4}</Box>}</Box>

                <Box data-anim="fadeInRight">
                  {buttonText && (
                    <Anchor button href={buttonUrl} variant="outlined">
                      {buttonText}
                    </Anchor>
                  )}
                </Box>
              </RevealOnScroll>
              <Col xs={12} md={6} className="text-center">
                <Box>
                  {windowWidth > 767 && (
                    <Img
                      src={GetImage.home(pcImageName)}
                      className={`order-${imageOrder} mt-5 mt-md-0 ${
                        i === 0 ? 'with-frame' : ''
                      }`.trim()}
                      alt={`image of ${pcImageName.replace('-', ' ')}`}
                    />
                  )}

                  {windowWidth < 768 && (
                    <Img
                      src={GetImage.home(mobileImageName)}
                      className={`order-${imageOrder} mt-5 mt-md-0 ${
                        i === 0 ? 'with-frame' : ''
                      }`.trim()}
                      alt={`image of ${mobileImageName.replace('-', ' ')}`}
                    />
                  )}
                </Box>
              </Col>
            </Row>
          )
        )}
      </Container>
    </>
  );
};

export default memo(MainBody);

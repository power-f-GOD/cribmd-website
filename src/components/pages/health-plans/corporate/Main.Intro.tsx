import { memo, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Box, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/corporate/Main.module.scss';
import { AppWindowContext } from 'src/pages/_app';
import { benefitsData } from './data';
const MainIntro = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <>
      <Container className="mb-5">
        <Box as="h2" data-anim_delay="0.3">
          Benefits
        </Box>
        <Box>
          {windowWidth > 767 && (
            <Box className={`${S.benefitsGrid}`}>
              {benefitsData.map(
                (
                  {
                    header,
                    list1,
                    list2Title,
                    list2Content,
                    list3Title,
                    list3Content,
                    list4Title,
                    list4Content,
                    list5Title,
                    list5Content,
                    list6Title,
                    list6Content,
                    list7Title,
                    list7Content,
                    footer,
                    monthlyFee
                    // yearlyfee
                  },
                  i
                ) => (
                  <Box
                    key={header}
                    className={`${S.benefitsContainer}  ${i !== 0 ? 'text-center' : ''}`}>
                    <Box>
                      <Box as="h2" className="h6">
                        {header}
                      </Box>
                    </Box>
                    <Box>
                      <Box as="p">
                        {list1 === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list1
                        )}
                      </Box>
                    </Box>
                    <Box>
                      <Box className="h6">
                        {list2Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list2Title
                        )}
                      </Box>
                      <Box>{list2Content}</Box>
                    </Box>
                    <Box>
                      <Box className="h6">
                        {list3Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list3Title
                        )}
                      </Box>
                      <Box>{list3Content ?? list3Content}</Box>
                    </Box>
                    <Box>
                      <Box className="h6">
                        {list4Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list4Title
                        )}
                      </Box>
                      <Box>{list4Content ?? list4Content}</Box>
                    </Box>
                    <Box>
                      <Box className="h6">
                        {list5Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list5Title
                        )}
                      </Box>
                      <Box>{list5Content ?? list5Content}</Box>
                    </Box>
                    <Box>
                      <Box className="h6">
                        {list6Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list6Title
                        )}
                      </Box>
                      <Box>{list6Content ?? list6Content}</Box>
                    </Box>
                    <Box>
                      <Box className="h6">
                        {list7Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list7Title
                        )}
                      </Box>
                      <Box>{list7Content ?? list7Content}</Box>
                    </Box>
                    <Box className="justify-content-center">
                      {i === 0 ? (
                        <Box>
                          <SVGIcon name="download-cloud" />
                          <Box as="span" className="ms-2">
                            {footer}
                          </Box>
                        </Box>
                      ) : (
                        <>
                          <Box className={`${S.subscribeButton} py-`}>
                            <Box as="i" className="ms-2">
                              {footer}
                            </Box>
                            <br></br>
                            <Box as="i" className="ms-2">
                              {monthlyFee}
                            </Box>
                          </Box>
                        </>
                      )}
                    </Box>
                  </Box>
                )
              )}
            </Box>
          )}

          {windowWidth < 768 && (
            <Box>
              {benefitsData.slice(1).map(
                ({
                  header,
                  list1,
                  list2Title,
                  list2Content,
                  list3Title,
                  list3Content,
                  list4Title,
                  // list4Content,
                  list5Title,
                  // list5Content,
                  list6Title,
                  // list6Content,
                  list7Title,
                  // list7Content,
                  footer,
                  monthlyFee
                  // yearlyfee
                }) => (
                  <Box key={header} className={`${S.benefitsContainer} my-3`}>
                    <Box className={`justify-content-between ${S.benefitsHeader}`}>
                      <Box as="h2" className="h6">
                        {header}
                      </Box>
                      <Box className={`${S.careCount}`}>
                        <Box as="p">
                          {list1 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            list1
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box className="me-2 pt-3">
                        {list2Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box>
                        <Box className="h6"> Consultations </Box>
                        In Patient and Out Patient Care, General and Specialist Consultation
                        <br></br>
                        <Box as="span">{list2Content}</Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box className="me-2 pt-3">
                        {list3Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box>
                        <Box className="h6">Treatment of Basic Medical and Surgical Cases</Box>
                        <Box as="span">{list3Content ?? list3Content}</Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box className="me-2 pt-3">
                        {list4Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box>
                        <Box className="h6"> Chat with Doctors </Box>
                        Free chat for medical information and consultations.
                      </Box>
                    </Box>
                    <Box>
                      <Box className="me-2 pt-3">
                        {list5Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box>
                        <Box className="h6"> Admission, Accommodation & Feeding </Box>
                        Hospital Ward Care
                      </Box>
                    </Box>
                    <Box>
                      <Box className="me-2 pt-3">
                        {list6Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box>
                        <Box className="h6">Obstetrics Care</Box>
                        Ante-Natal Care and Delivery
                      </Box>
                    </Box>
                    <Box>
                      <Box className="me-2 pt-3">
                        {list7Title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box>
                        <Box className="h6">Family Plan</Box>
                        <Box as="span">{list3Content ?? list3Content}</Box>
                      </Box>
                    </Box>
                    <Box className="justify-content-center text-center">
                      <Box className={`${S.subscribeButton} py-`}>
                        <Box as="i" className="ms-2">
                          {footer}
                        </Box>
                        <br></br>
                        <Box as="i" className="ms-2">
                          {monthlyFee}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};
export default memo(MainIntro);

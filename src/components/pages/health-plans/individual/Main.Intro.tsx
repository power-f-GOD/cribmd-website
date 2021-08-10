import { memo, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Box, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';
import { AppWindowContext } from 'src/pages/_app';
import { benefitsData } from '../individual/data';

const MainIntro = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);

  return (
    <>
      <Container className="mb-5">
        <Box as="h2" data-anim_delay="0.3">
          Benefits
        </Box>
        <Box className="pb-2">
          {windowWidth > 767 && (
            <Box className={`${S.benefitsGrid}`}>
              {benefitsData.map(
                (
                  {
                    header,
                    list1,
                    list2,
                    list3,
                    list4,
                    list5,
                    list6,
                    list7,
                    list8,
                    list9,
                    list10,
                    list11,
                    footer,
                    fee
                  },
                  i
                ) => (
                  <Box
                    key={header}
                    className={`${S.benefitsContainer} ${i !== 0 ? 'text-center' : ''}`}>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      <Box as="h2" className="h6">
                        {header}
                      </Box>
                    </Box>
                    <Box className={`${i !== 0 ? S.careCount : ''}`}>
                      <Box as="p">
                        {list1 === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          list1
                        )}
                      </Box>
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list2 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list2}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list3 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list3}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list4 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list4}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list5 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list5}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list6 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list6}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list7 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list7}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list8 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list8}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list9 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list9}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list10 === 'checked' ? (
                        <SVGIcon name="check(blue)" size="inherit" />
                      ) : (
                        list10
                      )}
                    </Box>
                    <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                      {list11 === 'checked' ? (
                        <SVGIcon name="check(blue)" size="inherit" />
                      ) : (
                        list11
                      )}
                    </Box>
                    <Box className="justify-content-center">
                      {i === 0 ? (
                        <>
                          <Box>
                            <SVGIcon name="download-cloud" />
                            <Box as="span" className="ms-2">
                              {footer}
                            </Box>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Box className={`${S.subscribeButton} py-`}>
                            <Box as="i" className="ms-2">
                              {footer}
                            </Box>
                            <br></br>
                            <Box as="i" className="ms-2">
                              {fee}
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
              {benefitsData
                .slice(1)
                .map(
                  ({
                    header,
                    list1,
                    list2,
                    list3,
                    list4,
                    list5,
                    list6,
                    list7,
                    list8,
                    list9,
                    list10,
                    list11,
                    footer,
                    fee
                  }) => (
                    <Box key={header} className={`${S.benefitsContainer} secondary-content my-3`}>
                      <Box className={`justify-content-between`}>
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
                        <Box as="span" className="me-3">
                          {list2 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Preventive Care
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list3 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Outpatient Care
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list4 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Advanced diagnostics
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list5 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Inpatient Hospital Care
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list6 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Fertility
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list7 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Maternity
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list8 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Emergency and Urgent / Clinic Care
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list9 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Prescription drugs
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list10 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Dental Care
                      </Box>
                      <Box>
                        <Box as="span" className="me-3">
                          {list11 === 'checked' ? (
                            <SVGIcon name="check(blue)" size="inherit" />
                          ) : (
                            <SVGIcon name="check(grey)" size="inherit" />
                          )}
                        </Box>
                        Eye Care
                      </Box>
                      <Box className="text-center">
                        <Box as="span" className={`${S.subscribeButton} py-`}>
                          <Box as="i" className="ms-2">
                            {footer}
                          </Box>
                          <br></br>
                          <Box as="i" className="ms-2">
                            {fee}
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

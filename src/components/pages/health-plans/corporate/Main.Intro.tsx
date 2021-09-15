import { memo, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import { Box, SVGIcon, Anchor, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/corporate/Main.module.scss';
import { corporateBenefitsData } from '../../../../data/health-plans/corporate';
import { preventDefault } from 'src/utils';

const MainIntro = (): JSX.Element => {
  const handleRenderList = useCallback(
    ({ title, content, header, headerContent }, i) =>
      title && (
        <Box className={`${S.contentContainer} d-flex`} key={i}>
          {title === 'checked' ? (
            <SVGIcon name="check(blue)" size="inherit" className="me-2" />
          ) : (
            <SVGIcon name="check(grey)" size="inherit" className="me-2" />
          )}

          <Box>
            <Box as="header" className="h6 mt-0">
              {header}
            </Box>
            <Box as="p" className="theme-tertiary">
              {headerContent}
            </Box>
            <Box as="p" className="fw-bold theme-tertiary">
              {content}
            </Box>
          </Box>
        </Box>
      ),
    []
  );

  return (
    <>
      <Container className="mb-5 shrink-max-width-xxl">
        <RevealOnScroll>
          <Box as="h2" data-anim_delay="0.3">
            Benefits
          </Box>
        </RevealOnScroll>

        <Box className={`${S.benefitsGrid}`}>
          {/* {windowWidth > 767 && (
            <Box>
              {benefitsData.map(({ header, list, list1, footer, monthlyFee }, i) => (
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
                      {list1 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list1}
                    </Box>
                  </Box>
                  {list?.map(({ title, content }, i) => (
                    <Box key={i}>
                      <Box className="h6">
                        {title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          title
                        )}
                      </Box>
                      <Box>{content}</Box>
                    </Box>
                  ))}

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
              ))}
            </Box>
          )} */}

          {useMemo(() => corporateBenefitsData.slice(1), []).map(
            useCallback(
              ({ header, list1, list, footer, monthlyFee }, _i) => (
                <RevealOnScroll key={header} className={`${S.benefitsContainer} my-3`}>
                  <Box className={`d-flex justify-content-between ${S.benefitsHeader}`}>
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

                  {list?.map(handleRenderList)}

                  <Box className="justify-content-center text-center mt-auto">
                    <Anchor
                      button
                      href="http://app.cribmd.com/signup?rURL=corp/slot"
                      className={`flex-column align-item-center w-100 py-2`}
                      variant={_i === 0 ? 'contained' : 'outlined'}
                      color="primary">
                      <Box as="small" className="ms-2">
                        {footer}
                      </Box>
                      <Box as="span" className="ms-2">
                        {monthlyFee}
                      </Box>
                    </Anchor>
                  </Box>
                </RevealOnScroll>
              ),
              [handleRenderList]
            )
          )}
        </Box>

        <RevealOnScroll className="text-center">
          <Anchor
            className="d-inline-flex align-items-center my-3"
            variant="text"
            href="/#"
            onClick={useCallback(
              (e) =>
                preventDefault(() => {
                  window.location.href =
                    'https://drive.google.com/u/0/uc?id=1zG9kHGyiTZ-udapiw349E_6OtG4rdcl8&export=download';
                })(e),
              []
            )}>
            <SVGIcon name="download-cloud" className="me-2" /> Download full Coverage Document
          </Anchor>
        </RevealOnScroll>
      </Container>
    </>
  );
};
export default memo(MainIntro);

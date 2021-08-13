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
        <Box className="px-2">
          {windowWidth > 767 && (
            <Box className={`${S.benefitsGrid}`}>
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
          )}

          {windowWidth < 768 && (
            <Box>
              {benefitsData.slice(1).map(({ header, list1, list, footer, monthlyFee }) => (
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
                  {list?.map(({ title, content, header, headerContent }, i) => (
                    <Box key={i}>
                      <Box className="me-2 pt-3">
                        {title === 'checked' ? (
                          <SVGIcon name="check(blue)" size="inherit" />
                        ) : (
                          <SVGIcon name="check(grey)" size="inherit" />
                        )}
                      </Box>
                      <Box className={S.contentContainer}>
                        <Box className="h6"> {header} </Box>
                        {headerContent && headerContent}

                        <Box as="span">{content}</Box>
                      </Box>
                    </Box>
                  ))}

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
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};
export default memo(MainIntro);

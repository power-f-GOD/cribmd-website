import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Box, SVGIcon, Anchor } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';
// import { AppWindowContext } from 'src/pages/_app';
import { benefitsData } from '../individual/data';

const MainIntro = (): JSX.Element => {
  // const windowWidth = useContext(AppWindowContext);

  return (
    <Container className="mb-5">
      <Box as="h2">Benefits</Box>

      <Box className={S.benefitsGrid}>
        {/* {windowWidth > 767 && false && (
          <Box className={`${S.benefitsGrid}`}>
            {benefitsData.map(({ header, list, list1, footer, price: fee }, i) => (
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
                    {list1 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list1}
                  </Box>
                </Box>
                {list.map(({ content }) => (
                  <Box key={i} className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                    {content === 'checked' ? (
                      <SVGIcon name="check(blue)" size="inherit" />
                    ) : (
                      content
                    )}
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
                    <Box className={`${S.subscribeButton} py-`}>
                      <Box as="i" className="ms-2">
                        {footer}
                      </Box>
                      <br></br>
                      <Box as="i" className="ms-2">
                        {fee}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )} */}

        {benefitsData.slice(1).map(({ header, list, list1, footer, price }) => (
          <Box key={header} className={`${S.benefitsContainer} secondary-content`}>
            <Box className={`justify-content-between flex-wrap`}>
              <Box as="h2" className="h6">
                {header}
              </Box>
              <Box className={`${S.careCount}`}>
                <Box as="p">
                  {list1 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list1}
                </Box>
              </Box>
            </Box>
            {list.map(({ content, header }) =>
              content ? (
                <Box key={header}>
                  <Box as="span" className="me-3">
                    {content === 'checked' ? (
                      <SVGIcon name="check(blue)" size="inherit" />
                    ) : (
                      <SVGIcon name="check(grey)" size="inherit" />
                    )}
                  </Box>
                  {header}
                </Box>
              ) : null
            )}

            <Box className="text-center">
              <Anchor
                button
                className={`flex-column align-item-center w-100 py-2`}
                variant="outlined"
                color="primary">
                <Box as="small" className="ms-2">
                  {footer}
                </Box>
                <Box as="span" className="ms-2">
                  {price}
                </Box>
              </Anchor>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default memo(MainIntro);

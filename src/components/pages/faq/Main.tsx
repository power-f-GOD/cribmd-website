/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/faq/index.module.scss';
import { FAQs } from 'src/data/faq';
import { QandA } from './_QandA';
import { Box, Button, RevealOnScroll } from 'src/components';
import { useState, useCallback, SyntheticEvent } from 'react';
import { SVGIcon } from 'src/components/shared';
import { FAQDataProps } from 'src/types';

const Main = (): JSX.Element => {
  const [openFAQId, setOpenFAQId] = useState('');
  const [filteredCategory, setFilteredCategory] = useState<Record<keyof FAQDataProps, boolean>>({
    generalInfo: false,
    pricingAndPlans: false,
    platformUsage: false,
    privacyAndSecurity: false
  });
  const noFilteredCategory = (() => {
    for (const [, value] of Object.entries(filteredCategory)) {
      if (value) {
        return false;
      }
    }

    return true;
  })();

  const handleFilterCategoryClick = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
    setFilteredCategory((prevfilter) => {
      const target = e.target as HTMLButtonElement;
      const newFilter = { ...prevfilter };
      const { generalInfo, pricingAndPlans, privacyAndSecurity, platformUsage } = newFilter;

      switch (true) {
        case /general/i.test(target.textContent!):
          target.dataset.selected = '' + !generalInfo;
          newFilter.generalInfo = !generalInfo;
          break;
        case /pricing/i.test(target.textContent!):
          target.dataset.selected = '' + !pricingAndPlans;
          newFilter.pricingAndPlans = !pricingAndPlans;
          break;
        case /privacy/i.test(target.textContent!):
          target.dataset.selected = '' + !privacyAndSecurity;
          newFilter.privacyAndSecurity = !privacyAndSecurity;
          break;
        case /platform/i.test(target.textContent!):
          target.dataset.selected = '' + !platformUsage;
          newFilter.platformUsage = !platformUsage;
          break;
      }

      return newFilter;
    });
  }, []);

  return (
    <Container as="main" className={`${S.Main} shrink-max-width-xxl`}>
      <RevealOnScroll>
        <Box as="p">Filter questions by category</Box>
      </RevealOnScroll>

      <Box className={S.categoryButtonsWrapper}>
        <RevealOnScroll className={S.categoryButtonsContainer} animName="fadeInLeft" duration={0.5}>
          {['General Info ', 'Pricing and Plans', ' Privacy and Security', ' Platform Usage'].map(
            (text) => (
              <Button
                color="tertiary"
                variant="outlined"
                onClick={handleFilterCategoryClick}
                key={text}>
                {text}
                <SVGIcon name="tick" crop />
              </Button>
            )
          )}
        </RevealOnScroll>
      </Box>

      {(noFilteredCategory || filteredCategory.generalInfo) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            General Info
          </Box>

          {FAQs.generalInfo.map((data) => (
            <QandA
              data={data}
              openFAQId={openFAQId}
              setOpenFAQId={setOpenFAQId}
              key={data.question}
            />
          ))}
        </Box>
      )}

      {(noFilteredCategory || filteredCategory.pricingAndPlans) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Pricing and Plans
          </Box>

          {FAQs.pricingAndPlans.map((data) => (
            <QandA
              data={data}
              openFAQId={openFAQId}
              setOpenFAQId={setOpenFAQId}
              key={data.question}
            />
          ))}
        </Box>
      )}

      {(noFilteredCategory || filteredCategory.privacyAndSecurity) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Privacy and Security
          </Box>

          {FAQs.privacyAndSecurity.map((data) => (
            <QandA
              data={data}
              openFAQId={openFAQId}
              setOpenFAQId={setOpenFAQId}
              key={data.question}
            />
          ))}
        </Box>
      )}

      {(noFilteredCategory || filteredCategory.platformUsage) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Platform Usage
          </Box>

          {FAQs.platformUsage.map((data) => (
            <QandA
              data={data}
              openFAQId={openFAQId}
              setOpenFAQId={setOpenFAQId}
              key={data.question}
            />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default Main;

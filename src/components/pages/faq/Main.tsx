/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/faq/index.module.scss';
import { FAQs } from 'src/data/faq';
import { QandA } from './_QandA';
import { Box, Button, RevealOnScroll } from 'src/components';
import { useState, useCallback, SyntheticEvent } from 'react';
import { SVGIcon } from 'src/components/shared';

const Main = (): JSX.Element => {
  const [openFAQId, setOpenFAQId] = useState('');
  const [filteredCategory, setFilteredCategory] = useState({
    generalInfo: false,
    pricingAndPlans: false,
    medicalQuestions: false
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
      const { generalInfo, pricingAndPlans, medicalQuestions } = newFilter;

      switch (true) {
        case /general/i.test(target.textContent!):
          target.dataset.selected = '' + !generalInfo;
          newFilter.generalInfo = !generalInfo;
          break;
        case /pricing/i.test(target.textContent!):
          target.dataset.selected = '' + !pricingAndPlans;
          newFilter.pricingAndPlans = !pricingAndPlans;
          break;
        case /medical/i.test(target.textContent!):
          target.dataset.selected = '' + !medicalQuestions;
          newFilter.medicalQuestions = !medicalQuestions;
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

      <RevealOnScroll className={S.categoryButtonsWrapper} animName="fadeInLeft" duration={0.5}>
        <Button color="tertiary" variant="outlined" onClick={handleFilterCategoryClick}>
          General Info <SVGIcon name="tick" />
        </Button>
        <Button color="tertiary" variant="outlined" onClick={handleFilterCategoryClick}>
          Pricing and Plans
          <SVGIcon name="tick" />
        </Button>
        <Button color="tertiary" variant="outlined" onClick={handleFilterCategoryClick}>
          Medical Questions
          <SVGIcon name="tick" />
        </Button>
      </RevealOnScroll>

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

      {(noFilteredCategory || filteredCategory.medicalQuestions) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Medical Questions
          </Box>

          {FAQs.medicalQuestions.map((data) => (
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

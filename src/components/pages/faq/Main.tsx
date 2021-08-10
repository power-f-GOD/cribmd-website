import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/faq/index.module.scss';
import { FAQs } from './data';
import { QandA } from './_QandA';
import { Box, Button, RevealOnScroll } from 'src/components';
import { useState } from 'react';

const Main = (): JSX.Element => {
  const [openFAQId, setOpenFAQId] = useState('');
  // const [filterCategory, setFilterCategory] = useState('');

  // const handleFilterCategoryClick = useCallback(
  //   (e: SyntheticEvent<HTMLButtonElement>) => {

  //     setFilterCategory()
  //   },
  //   [input],
  // )

  return (
    <Container as="main" className={`${S.Main} shrink-max-width-xxl`}>
      <RevealOnScroll>
        <Box as="p">Filter questions by category</Box>
      </RevealOnScroll>

      <RevealOnScroll className={S.categoryButtonsWrapper} animName="fadeInLeft" duration={0.5}>
        <Button color="tertiary" variant="outlined">
          General Info
        </Button>
        <Button color="tertiary" variant="outlined">
          Pricing and Plans
        </Button>
        <Button color="tertiary" variant="outlined">
          Medical Questions
        </Button>
      </RevealOnScroll>

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
    </Container>
  );
};

export default Main;

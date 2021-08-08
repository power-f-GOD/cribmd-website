import { memo } from 'react';
import { Container } from 'react-bootstrap';
import { Box, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';

const MainIntro = (): JSX.Element => {
  const benefit = [
    {
      header: 'Basic',
      list1: 'Preventive Care',
      list2: 'Outpatient Care',
      list3: 'Advanced diagnostics',
      list4: 'Inpatient Hospital Care',
      list5: 'Fertility',
      list7: 'Maternity',
      list8: 'Emergency and Urgent / Clinic Care',
      list9: 'Prescription drugs',
      list10: 'Dental Care',
      list11: 'Eye Care',
      footer: ''
    },
    {
      header: 'Basic',
      list1: '',
      list2: '',
      list3: 'checked',
      list4: '',
      list5: 'checked',
      list7: '',
      list8: '',
      list9: 'checked',
      list10: 'checked',
      list11: '',
      footer: ''
    },
    {
      header: 'Premium',
      list1: '',
      list2: '',
      list3: '',
      list4: '',
      list5: '',
      list7: '',
      list8: '',
      list9: '',
      list10: '',
      list11: '',
      footer: ''
    },
    {
      header: 'Family',
      list1: '',
      list2: '',
      list3: '',
      list4: '',
      list5: '',
      list7: '',
      list8: '',
      list9: '',
      list10: '',
      list11: '',
      footer: ''
    }
  ];
  return (
    <>
      <RevealOnScroll component={Container} className="mb-5">
        <Box as="h2" data-anim_delay="0.3">
          Benefits
        </Box>
        <Box>
          {benefit.map(({ header, list1, list2, list3 }) => (
            <>
              <Box className={S.benefitsGrid}>
                <Box>
                  <Box as="h2" className="h6">
                    {header}
                  </Box>
                  <Box as="h2" className="h6">
                    {list1}
                  </Box>
                  <Box as="h2" className="h6">
                    {list2}
                  </Box>
                  <Box as="h2" className="h6">
                    {list3}
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </>
          ))}
        </Box>
      </RevealOnScroll>
    </>
  );
};

export default memo(MainIntro);

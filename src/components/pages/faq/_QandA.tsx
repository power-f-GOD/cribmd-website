/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useCallback, useMemo, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import S from 'src/styles/pages/faq/index.module.scss';
import { Box, SVGIcon, Button } from 'src/components';
import { QandAProps } from 'src/types';
import { AppWindowContext } from 'src/pages/_app';

const _QandA: FC<{
  data: QandAProps;
  openFAQId: string;
  setOpenFAQId(func: (id: string) => string): void;
}> = ({
  data: {
    question,
    answer: { paragraphs, orderedList1Title, orderedList2Title, orderedList1, orderedList2 }
  },
  openFAQId,
  setOpenFAQId,
  ...props
}) => {
  const windowWidth = useContext(AppWindowContext);
  const animFrom = useMemo(() => {
    return {
      transform: windowWidth < 576 ? 'rotateZ(-45deg) scale(0)' : 'scale(0.9)',
      clipPath: 'ellipse(0% 0%)'
    };
  }, [windowWidth]);
  const animTo = useMemo(() => {
    return {
      transform: windowWidth < 576 ? 'rotateZ(0) scale(1)' : 'scale(1)',
      clipPath: 'ellipse(120% 120%)'
    };
  }, [windowWidth]);
  const animDuration = useMemo(() => {
    return { duration: 0.3 };
  }, []);

  const handleFAQClick = useCallback(() => {
    setOpenFAQId((id) => (id === question ? '' : question));
  }, [question, setOpenFAQId]);

  return (
    <Box
      {...props}
      as="div"
      className={`${S.QandA} mb-3 mb-md-4 ${openFAQId === question ? S.open : ''} ${
        (props as any).className
      }`.trim()}>
      <Button
        variant="text"
        className="d-flex justify-content-between my-0 w-100 px-3 py-2 px-md-4 py-md-3"
        onClick={handleFAQClick}>
        <Box as="span" className="text-start">
          {question}
        </Box>
        <SVGIcon name="caret-down" />
      </Button>

      <AnimatePresence>
        {openFAQId === question && (
          <motion.div
            style={animFrom}
            animate={animTo}
            exit={animFrom}
            className={`${S.answer} px-3 px-md-4 py-2 py-md-3`}
            onClick={handleFAQClick}
            transition={animDuration}>
            {paragraphs?.map((paragraph) => {
              const embolden = paragraph.startsWith('|');

              return (
                <Box as="p" className={`${embolden ? 'fw-bold' : ''} my-2`} key={paragraph}>
                  {embolden ? paragraph.replace(/\|/g, '') : paragraph}
                </Box>
              );
            })}

            {orderedList1Title && (
              <Box as="p" className="my-2 fw-bold">
                {orderedList1Title}
              </Box>
            )}

            {orderedList1?.length ? (
              <Box as="ol" className="my-2">
                {orderedList1?.map((text) => (
                  <Box as="li" key={text}>
                    {text}
                  </Box>
                ))}
              </Box>
            ) : null}

            {orderedList2Title && (
              <Box as="p" className="my-2 fw-bold">
                {orderedList2Title}
              </Box>
            )}

            {orderedList2?.length ? (
              <Box as="ol" className="my-2">
                {orderedList2?.map((text) => (
                  <Box as="li" key={text}>
                    {text}
                  </Box>
                ))}
              </Box>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export const QandA: FC<{
  data: QandAProps;
  openFAQId: string;
  setOpenFAQId(func: (id: string) => string): void;
}> = memo(_QandA);

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
}> = ({ data: { question, answer }, openFAQId, setOpenFAQId, ...props }) => {
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
        <Box as="span">{question}</Box>
        <SVGIcon name="caret-down" />
      </Button>

      <AnimatePresence>
        {openFAQId === question && (
          <motion.p
            style={animFrom}
            animate={animTo}
            exit={animFrom}
            className="p-3 p-md-4"
            onClick={handleFAQClick}
            transition={animDuration}>
            {answer}
          </motion.p>
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

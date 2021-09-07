/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useCallback, useMemo, useState } from 'react';

import S from 'src/styles/pages/faq/index.module.scss';
import { Box, SVGIcon, Button } from 'src/components';
import { QandAProps } from 'src/types';

const _QandA: FC<{
  data: QandAProps;
  openFAQId: string;
  setOpenFAQId(func: (id: string) => string): void;
}> = ({
  data: {
    question,
    answer: {
      paragraphs: _paragraphs,
      orderedList1Title,
      orderedList2Title,
      orderedList1,
      orderedList2
    }
  },
  openFAQId,
  setOpenFAQId,
  ...props
}) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const paragraphs = useMemo(() => _paragraphs, [_paragraphs]);

  const handleAnswerAnimationEnd = useCallback(
    (e) => {
      const target = e.target as HTMLElement;

      if (target.className === e.currentTarget.className) {
        setDisplayAnswer(openFAQId === question);
      }
    },
    [openFAQId, question]
  );

  const handleFAQClick = useCallback(() => {
    setOpenFAQId((id) => (id === question ? '' : question));
  }, [question, setOpenFAQId]);

  const handleRenderParagraphs = useCallback((paragraph) => {
    const embolden = paragraph.startsWith('|');

    return (
      <Box as="p" className={`${embolden ? 'fw-bold' : ''} my-2`} key={paragraph}>
        {embolden ? paragraph.replace(/\|/g, '') : paragraph}
      </Box>
    );
  }, []);

  const handleRenderOrderedList = useCallback(
    (text) => (
      <Box as="li" key={text}>
        {text}
      </Box>
    ),
    []
  );

  return (
    <Box
      {...useMemo(() => props, [props])}
      as="div"
      className={`${S.QandA} mb-3 mb-md-4 ${openFAQId === question ? S.open : ''} ${
        (props as any).className || ''
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

      {/* <hr /> */}

      {(displayAnswer || openFAQId === question) && (
        <Box
          className={`${S.answer} anim__${
            openFAQId === question ? 'InDown' : 'OutUp'
          } px-3 px-md-4 py-2 py-md-3`}
          onClick={handleFAQClick}
          onAnimationEnd={handleAnswerAnimationEnd}>
          {paragraphs?.map(handleRenderParagraphs)}

          {orderedList1Title && (
            <Box as="p" className="my-2 fw-bold">
              {orderedList1Title}
            </Box>
          )}

          {orderedList1?.length ? (
            <Box as="ol" className="my-2">
              {orderedList1?.map(handleRenderOrderedList)}
            </Box>
          ) : null}

          {orderedList2Title && (
            <Box as="p" className="my-2 fw-bold">
              {orderedList2Title}
            </Box>
          )}

          {orderedList2?.length ? (
            <Box as="ol" className="my-2">
              {orderedList2?.map(handleRenderOrderedList)}
            </Box>
          ) : null}
        </Box>
      )}
    </Box>
  );
};

export const QandA: FC<{
  data: QandAProps;
  openFAQId: string;
  setOpenFAQId(func: (id: string) => string): void;
}> = memo(_QandA);

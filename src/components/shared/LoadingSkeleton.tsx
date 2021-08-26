import { FC, memo, useMemo, useCallback } from 'react';

import { Box } from '.';

const _LoadingSkeleton: FC<{
  type?: 'circle' | 'box';
  variant?: 'grey' | 'white';
  count?: string | number;
  className?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
  size?: string;
  erred?: boolean;
}> = ({
  className,
  size,
  width,
  height,
  type,
  borderRadius,
  count,
  variant,
  erred
}): JSX.Element => {
  const style = useMemo(
    () => ({
      width: size ? size : width,
      height: size ? size : height,
      borderRadius: type === 'circle' ? '50%' : borderRadius
    }),
    [borderRadius, size, width, height, type]
  );

  return (
    <>
      {Array(count || 1)
        .fill('')
        .map(
          useCallback(
            (_, i) => (
              <Box
                className={`LoadingSkeleton ${className || ''} ${variant || ''} ${
                  erred ? 'erred' : ''
                }`.replace(/\s+/g, ' ')}
                style={style}
                key={i}
              />
            ),
            [style, className, variant, erred]
          )
        )}
    </>
  );
};

export const LoadingSkeleton = memo(_LoadingSkeleton);

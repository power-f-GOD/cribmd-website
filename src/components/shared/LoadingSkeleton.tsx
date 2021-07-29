import { FC } from 'react';

import { Box } from '.';

export const LoadingSkeleton: FC<{
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
  return (
    <>
      {Array(count || 1)
        .fill('')
        .map((_, i) => (
          <Box
            className={`LoadingSkeleton ${className || ''} ${variant || ''} ${
              erred ? 'erred' : ''
            }`.replace(/\s+/g, ' ')}
            style={{
              width: size ? size : width,
              height: size ? size : height,
              borderRadius: type === 'circle' ? '50%' : borderRadius
            }}
            key={i}
          />
        ))}
    </>
  );
};

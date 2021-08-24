import { FC, memo } from 'react';
import { Box } from '.';
import { IconProps } from 'src/types';

const _Icon: FC<IconProps> = ({ children, name, size, crop, className }) => {
  return (
    <Box
      as="i"
      className={`Icon name__${name || ''} size__${size || 'inherit'} ${className || ''} ${
        crop ? 'overlow-clip' : ''
      }`.trim()}
      role="img"
      aria-label={`${name || ''} icon`}>
      {children}
    </Box>
  );
};

export const Icon: FC<IconProps> = memo(_Icon);

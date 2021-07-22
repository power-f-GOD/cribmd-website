import { FC } from 'react';
import { Box } from '.';
import { IconProps } from 'src/types';

const Icon: FC<IconProps> = ({ children, name, size, className }) => {
  return (
    <Box
      as="i"
      className={`Icon name__${name || ''} size__${size || 'inherit'} ${className || ''}`.trim()}
      role="img"
      aria-label={`${name || ''} icon`}>
      {children}
    </Box>
  );
};

export default Icon;

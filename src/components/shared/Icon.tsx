import { FC } from 'react';
import { Box } from '.';
import { SVGIconName } from 'src/types';

const Icon: FC<{ name?: SVGIconName & string; className?: string }> = ({
  children,
  name,
  className
}) => {
  return (
    <Box as="i" className={`Icon name__${name || ''} ${className || ''}`.trim()}>
      {children}
    </Box>
  );
};

export default Icon;

import { Button } from '@chakra-ui/react';
import React from 'react';

export const ButtonBlock = ({
  padding = { base: "1em", lg: "1.75em" },
  mt = '1.25em',
  bg = "#1565D8",
  _hover = { bg: '#0f51ad' },
  ...otherProps
}) => {
  const { children } = otherProps;
  return (
    <Button
      width="100%"
      padding={padding}
      mt={mt}
      bg={bg}
      _hover={_hover}
      {...otherProps}
    >
      {children}
    </Button >
  );
};

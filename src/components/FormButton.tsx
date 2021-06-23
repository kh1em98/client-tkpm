import React from 'react';
import { Button } from '@chakra-ui/react';
import { ButtonBlock } from './Button';

export const FormButton = ({ loading, disabled, ...otherProps }) => {
  const { children } = otherProps;

  return (
    <ButtonBlock {...otherProps} isDisabled={disabled} isLoading={loading} loadingText="Submitting">
      {children}
    </ButtonBlock>
  );
};

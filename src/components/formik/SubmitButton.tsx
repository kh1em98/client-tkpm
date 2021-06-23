import React from 'react';
import { useFormikContext } from 'formik';
import { FormButton } from '../FormButton';

export const SubmitButton = ({ disabled = false, ...otherProps }) => {
  const { isValid, isSubmitting } = useFormikContext();
  return (
    <FormButton
      disabled={isSubmitting || !isValid || disabled}
      loading={isSubmitting}
      type="submit"
      {...otherProps}
    />
  );
};

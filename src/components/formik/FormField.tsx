import React, { FC, ReactNode } from 'react';

import { Field, FieldProps, FieldAttributes } from 'formik';
import { CheckIcon } from '@chakra-ui/icons';
import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Textarea,
  Select,
  FormControl,
  FormHelperText,
  FormLabel,
  FormErrorMessage,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';
import StyledInput from '../Input';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props extends FieldAttributes<any> {
  label?: string;
  icon?: string;
  required?: boolean;
  tag?: string;
}

export const FormField: FC<Props> = ({
  label,
  icon,
  required,
  tag,
  helperText,
  ...otherProps
}) => {
  const { children } = otherProps;

  return (
    <FormControl mb={4}>
      <Field {...otherProps} required={required}>
        {(props: FieldProps): ReactNode => {
          const textHelper = helperText ? (
            <FormHelperText
              fontSize="xs"
              mt={2}
              opacity="0.6"
            >
              {helperText}
            </FormHelperText>
          ) : null;

          const error = props.meta.error ? (<FormErrorMessage>{props.meta.error}</FormErrorMessage>) : null;

          let inputNode: ReactNode;

          switch (tag) {
            case 'select':
              inputNode = <>
                <Select
                  placeholder="Select option"
                  {...props.field}
                  {...otherProps}>
                  {children}
                </Select>
              </>
              break;
            case 'textarea':
              inputNode = <>
                <Textarea
                  {...props.field}
                  {...otherProps}>
                  {children}
                </Textarea>
              </>
              break;
            case 'date':
              inputNode = <>
                <DatePicker
                  selected={new Date()}
                />
              </>
              break;

            case 'number':
              inputNode = <>
                <NumberInput defaultValue={18} min={0} max={20}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </>
              break;

            case 'currency':
              inputNode = <>
                <FormLabel
                  mt={{ base: "0.8em", lg: "0.8em" }}
                  fontWeight="medium"
                  lineHeight="1.3em"
                  color="#696F79"
                  fontSize={{ base: "0.75em", lg: "1em" }}
                >
                  {label && (
                    <label>{`${label}${required ? ' *' : ''}`}</label>
                  )}
                </FormLabel>
                <InputGroup>
                  <StyledInput
                    {...props.field}
                    {...otherProps}
                  />
                  <InputRightAddon children="VND" mt="4.5px" height="48px" color="#6E7491" />
                </InputGroup>
              </>
              break;
            default:
              inputNode = <>
                {icon ? (
                  <>
                    <FormLabel
                      mt="1em"
                      fontWeight="medium"
                      lineHeight="1.3em"
                      color="#696F79"
                      fontSize="1em"
                    >
                      {label && (
                        <label>{`${label}${required ? ' *' : ''}`}</label>
                      )}
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        fontSize="1.2em"
                        children="$"
                      />
                      {/* <Input
                        {...props.field}
                        {...otherProps}
                      /> */}
                      <StyledInput
                        {...props.field}
                        {...otherProps}
                      />
                    </InputGroup>
                  </>
                ) : (
                  <>
                    <FormLabel
                      mt={{ base: "0.8em", lg: "0.8em" }}
                      fontWeight="medium"
                      lineHeight="1.3em"
                      color="#696F79"
                      fontSize={{ base: "0.75em", lg: "1em" }}
                    >
                      {label && (
                        <label>{`${label}${required ? ' *' : ''}`}</label>
                      )}
                    </FormLabel>
                    <InputGroup>
                      <StyledInput
                        {...props.field}
                        {...otherProps}
                      />
                    </InputGroup>
                  </>
                )}
              </>
              break;
          }
          const fieldName = props.field.name;

          return <FormControl mb={4} isInvalid={!!(props.form.errors[fieldName] && props.form.touched[fieldName])}>
            {inputNode}
            {error}
            {textHelper}
          </FormControl>
        }}
      </Field>
    </FormControl >
  );
};

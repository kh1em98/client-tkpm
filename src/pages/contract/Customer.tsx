import { Box, Heading, HStack, Text, useToast } from '@chakra-ui/react';
import { FormField } from '../../components/formik/FormField';
import React, { useState } from 'react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import Contract from '../Contract';
import { SubmitButton } from '../../components/formik/SubmitButton';
import { MediumText } from '../../components/Typography';
import { dayDiff } from '../../utils/date';
import * as Yup from 'yup';
import { pick } from '@chakra-ui/utils';
import { roomSchema } from '../../view-models/Account';
import {
  dateSchema,
  sharedUserValidationSchema,
} from '../../view-models/Account';

interface ContractForm {
  userId?: number;
  email?: string;
  phone?: string;
  age?: string;
  roomId?: number;
  startTime: Date;
  endTime: Date;
  pricePerDay?: number;
}

const contractValidationSchema = Yup.object().shape(
  Object.assign(
    {},
    pick(sharedUserValidationSchema, ['email', 'age', 'phone']),
    dateSchema,
    roomSchema
  ),
);

const CustomerInfo = () => {
  const toast = useToast();
  const handleCreateContract = async (values: any, actions: any) => {
    actions.setSubmitting(true);
    try {
      const days = dayDiff(
        new Date(values.startTime),
        new Date(values.endTime),
      );

      console.log('diff : ', days);

      console.log(values);
    } catch (e) {
      actions.setSubmitting(false);

      toast({
        title: 'Error',
        description: (e as any).message,
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Box mt="2em">
        <Text color="#6E7491" fontSize="1.125em" fontWeight="semibold">
          Customer Information
        </Text>

        <Formik
          initialValues={{
            email: '',
            userId: 1,
            roomId: 1,
            phone: '',
            age: '',
            startTime: new Date(),
            endTime: new Date(),
            pricePerDay: 0,
          }}
          validationSchema={contractValidationSchema}
          onSubmit={handleCreateContract}
        >
          {(props: FormikProps<ContractForm>): JSX.Element => (
            <form onSubmit={props.handleSubmit}>
              <HStack spacing="4em">
                <Box>
                  <FormField
                    name="email"
                    placeholder="Email Address *"
                    type="email"
                    // label="Email"
                    width="300px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}
                  />
                </Box>
                <Box>
                  <FormField
                    name="phone"
                    placeholder="Phone Number *"
                    type="text"
                    width="300px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}
                  />
                </Box>
                <Box>
                  <FormField
                    name="age"
                    placeholder="Your Age *"
                    type="number"
                    // label="Age"
                    width="150px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}
                  />
                </Box>
              </HStack>

              <Text color="#6E7491" fontSize="1.125em" fontWeight="semibold">
                Room
              </Text>

              <HStack spacing="4em">
                <Box>
                  {' '}
                  <FormField
                    name="roomId"
                    placeholder="Room id *"
                    type="text"
                    // label="Age"
                    width="300px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}
                  />
                </Box>
                <Box>
                  <FormField
                    name="pricePerDay"
                    placeholder="Price per day"
                    type="text"
                    tag="currency"
                    // label="Age"
                    width="300px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}
                  />
                </Box>
              </HStack>
              <Box display="flex" justifyContent="flex-start"></Box>

              <HStack spacing="4em">
                <Box>
                  <Text
                    color="#6E7491"
                    fontSize="1.125em"
                    fontWeight="semibold">
                    Start Time
                  </Text>
                  <FormField
                    name="startTime"
                    placeholder="Start time *"
                    type="date"
                    // label="Age"
                    width="300px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}></FormField>
                </Box>

                <Box>
                  <Text
                    color="#6E7491"
                    fontSize="1.125em"
                    fontWeight="semibold">
                    End Time
                  </Text>
                  <FormField
                    name="endTime"
                    placeholder="End time *"
                    type="date"
                    // label="Age"
                    width="300px"
                    borderColor="#A1B0CC"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    color="#7C8DB0"
                    _focus={{ borderColor: '#605DEC' }}></FormField>
                </Box>
              </HStack>

              <Text
                color="#7C8DB0"
                mt="1em"
                lineHeight="22px"
                fontSize="1.125em">
                Total Price :{' '}
                <Text
                  as="span"
                  color="#6E7491"
                  fontSize="1.125em"
                  fontWeight="semibold">
                  {props!.values!.pricePerDay! * 3}
                  {/* 700,000 VND */}
                </Text>
              </Text>

              <SubmitButton
                mt="2em"
                width="300px"
                bg="#605DEC"
                _hover={{ bg: '#4543b3' }}>
                <MediumText color="white">Create Contract</MediumText>
              </SubmitButton>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default CustomerInfo;

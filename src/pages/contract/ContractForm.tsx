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
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { formatToVnd } from '../../utils/helper';
import { Redirect, useHistory } from 'react-router-dom';
import { createContract } from '../../redux/slices/roomSlice';
import { useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';

interface ContractForm {
  userId: number;
  email: string;
  phone: string;
  age: number;
  roomId: number;
  startTime: Date;
  endTime: Date;
  pricePerDay: number;
}

const contractValidationSchema = Yup.object().shape(
  Object.assign(
    {},
    pick(sharedUserValidationSchema, ['email', 'age', 'phone']),
    dateSchema,
  ),
);

const CustomerInfo = () => {
  const toast = useToast();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const { roomSelected, errorMessage } = useAppSelector((state) => state.room);

  if (!roomSelected?.id) {
    return <Redirect to="/" />;
  }
  const handleCreateContract = async (values: ContractForm, actions: any) => {
    actions.setSubmitting(true);
    try {
      const daysStay = dayDiff(
        new Date(values.startTime),
        new Date(values.endTime),
      );

      const resultAction = await dispatch(
        createContract({
          userId: userState.id,
          roomId: roomSelected.id,
          price: values.pricePerDay * daysStay,
          startTime: values.startTime,
          endTime: values.endTime,
        }),
      );

      unwrapResult(resultAction);

      toast({
        title: 'Success',
        description:
          'Sent a request to create contract. Wait an admin to confirm',
        status: 'success',
        isClosable: true,
      });

      history.push('/history');
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
            email: userState.email,
            userId: userState.id,
            phone: userState.phone,
            age: userState.age,
            startTime: new Date(),
            endTime: new Date(),
            pricePerDay: roomSelected.price,
            roomId: roomSelected.id,
          }}
          validationSchema={contractValidationSchema}
          onSubmit={handleCreateContract}>
          {(props: FormikProps<ContractForm>): JSX.Element => (
            <form onSubmit={props.handleSubmit}>
              <Box display="flex" alignItems="flex-start">
                <Box>
                  <FormField
                    mr="4em"
                    name="email"
                    placeholder="Email Address *"
                    type="email"
                    width="300px"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    disabled
                    _disabled={{ borderColor: '#A1B0CC', color: '#7C8DB0' }}
                  />
                </Box>
                <Box>
                  <FormField
                    mr="4em"
                    name="phone"
                    placeholder="Phone Number *"
                    type="text"
                    width="300px"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    disabled
                    _disabled={{ borderColor: '#A1B0CC', color: '#7C8DB0' }}
                  />
                </Box>
                <Box>
                  <FormField
                    mr="4em"
                    name="age"
                    placeholder="Your Age *"
                    type="number"
                    width="150px"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    disabled
                    _disabled={{ borderColor: '#A1B0CC', color: '#7C8DB0' }}
                  />
                </Box>
              </Box>

              <Text color="#6E7491" fontSize="1.125em" fontWeight="semibold">
                Room
              </Text>

              <Box display="flex" alignItems="flex-start">
                <Box>
                  <FormField
                    mr="4em"
                    name="roomId"
                    placeholder="Room id *"
                    type="text"
                    width="300px"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    disabled
                    _disabled={{ borderColor: '#A1B0CC', color: '#7C8DB0' }}
                  />
                </Box>
                <Box>
                  <FormField
                    name="pricePerDay"
                    placeholder="Price per day"
                    type="text"
                    tag="currency"
                    width="300px"
                    padding="0.5em 0.75em"
                    fontSize="18px"
                    height="48px"
                    disabled
                    _disabled={{ borderColor: '#A1B0CC', color: '#7C8DB0' }}
                  />
                </Box>
              </Box>

              <Box display="flex" alignItems="flex-start">
                <Box>
                  <Text
                    color="#6E7491"
                    fontSize="1.125em"
                    fontWeight="semibold">
                    Start Time
                  </Text>
                  <FormField
                    mr="4em"
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
                    mr="4em"
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
              </Box>

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
                  {roomSelected
                    ? formatToVnd(
                        roomSelected?.price *
                          dayDiff(
                            new Date(props.values.startTime),
                            new Date(props.values.endTime),
                          ),
                      )
                    : 0}
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

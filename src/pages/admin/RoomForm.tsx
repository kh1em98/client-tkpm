import { Box, Text, useToast } from '@chakra-ui/react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useState } from 'react';
import { FormField } from '../../components/formik/FormField';
import { SubmitButton } from '../../components/formik/SubmitButton';
import { MediumText } from '../../components/Typography';
import { RoomStatus } from '../../models/Room';
import { dayDiff } from '../../utils/date';
import { formatToVnd } from '../../utils/helper';
import ContractForm from '../contract/ContractForm';
import UploadImage from '../../components/upload/UploadImage';
import { useAppDispatch } from '../../redux/store';
import { createRoom } from '../../redux/slices/roomSlice';
import { useHistory } from 'react-router';
import { unwrapResult } from '@reduxjs/toolkit';
import { roomSchema } from '../../view-models/Room';
import * as Yup from 'yup';

export interface IRoomForm {
  name: string;
  price?: number;
  description: string;
  rate?: number | undefined;
  image?: string;
}
const roomValidationSchema = Yup.object().shape(roomSchema);

const RoomForm = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const toast = useToast();
  const [imageUrl, setImageUrl] = useState<string>('');
  const handleCreateRoom = async (
    values: IRoomForm,
    actions: FormikHelpers<IRoomForm>,
  ) => {
    actions.setSubmitting(true);
    try {
      if (imageUrl === '') {
        toast({
          title: 'Error',
          description: 'Need to upload an image',
          status: 'error',
          isClosable: true,
        });
      } else {
        const resultAction = await dispatch(
          createRoom({
            ...values,
            image: imageUrl,
          }),
        );
        unwrapResult(resultAction);

        history.push('/admin/rooms');
      }
    } catch (error) {
      actions.setSubmitting(false);

      toast({
        title: 'Error',
        description: (error as any).message,
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <Box mt="2em">
      <Text color="#6E7491" fontSize="1.125em" fontWeight="semibold">
        Room Information
      </Text>

      <Formik
        initialValues={{
          name: '',
          description: '',
        }}
        onSubmit={handleCreateRoom}
        validationSchema={roomValidationSchema}>
        {(props: FormikProps<IRoomForm>): JSX.Element => (
          <form onSubmit={props.handleSubmit}>
            <Box>
              <FormField
                mr="4em"
                name="name"
                placeholder="Room's Name"
                type="text"
                width="500px"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                borderColor="#A1B0CC"
                color="#7C8DB0"
                _focus={{ borderColor: '#605DEC' }}
              />
            </Box>
            <Box>
              <FormField
                mr="4em"
                name="rate"
                placeholder="Room's Quality (1-5)"
                type="number"
                width="300px"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                borderColor="#A1B0CC"
                color="#7C8DB0"
                _focus={{ borderColor: '#605DEC' }}
              />
            </Box>
            <Box>
              <FormField
                mr="4em"
                name="description"
                placeholder="Room's Description"
                tag="textarea"
                type="number"
                width="500px"
                mt="0.5em"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                borderColor="#A1B0CC"
                color="#7C8DB0"
                _focus={{ borderColor: '#605DEC' }}
              />
            </Box>
            <Box>
              <FormField
                mr="4em"
                name="price"
                placeholder="Room's Price"
                tag="text"
                type="number"
                width="500px"
                mt="0.5em"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                borderColor="#A1B0CC"
                color="#7C8DB0"
                _focus={{ borderColor: '#605DEC' }}
              />
            </Box>
            <UploadImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <SubmitButton
              mt="2em"
              width="500px"
              bg="#605DEC"
              _hover={{ bg: '#4543b3' }}>
              <MediumText color="white">Create room</MediumText>
            </SubmitButton>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default RoomForm;

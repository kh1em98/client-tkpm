import { Box, Text } from '@chakra-ui/react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import { FormField } from '../../components/formik/FormField';
import { SubmitButton } from '../../components/formik/SubmitButton';
import { MediumText } from '../../components/Typography';
import { RoomStatus } from '../../models/Room';
import { dayDiff } from '../../utils/date';
import { formatToVnd } from '../../utils/helper';
import ContractForm from '../contract/ContractForm';
import UploadImage from './UploadImage';

interface IRoomForm {
  name: string;
  price: number;
  description: string;
  rate?: number | undefined;
  image: string;
}
const RoomForm = () => {
  const handleCreateRoom = async (
    values: IRoomForm,
    actions: FormikHelpers<IRoomForm>,
  ) => {
    actions.setSubmitting(true);
    // try {
    //   const resultAction = await dispatch(signIn(values));
    //   const payload = unwrapResult(resultAction);

    //   console.log('payload : ', payload);

    //   history.push('/');
    // } catch (errorMessage) {
    //   actions.setSubmitting(false);

    //   toast({
    //     title: 'Error',
    //     description: errorMessage as string,
    //     status: 'error',
    //     isClosable: true,
    //   });
    // }
  };

  return (
    <Box mt="2em">
      <Text color="#6E7491" fontSize="1.125em" fontWeight="semibold">
        Room Information
      </Text>

      <Formik
        initialValues={{
          name: '',
          price: 0,
          description: '',
          image: '',
        }}
        onSubmit={handleCreateRoom}>
        {(props: FormikProps<IRoomForm>): JSX.Element => (
          <form onSubmit={props.handleSubmit}>
            <Box>
              <FormField
                mr="4em"
                name="name"
                placeholder="Room's Name"
                type="text"
                width="400px"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                borderColor="#A1B0CC"
                color="#7C8DB0"
              />
            </Box>
            <Box>
              <FormField
                mr="4em"
                name="rate"
                placeholder="Room's Quality (1-5)"
                type="text"
                width="300px"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                borderColor="#A1B0CC"
                color="#7C8DB0"
              />
            </Box>
            <Box>
              <FormField
                mr="4em"
                name="description"
                placeholder="Room's Description"
                tag="textarea"
                type="number"
                width="400px"
                mt="0.5em"
                padding="0.5em 0.75em"
                fontSize="18px"
                height="48px"
                disabled
                _disabled={{ borderColor: '#A1B0CC', color: '#7C8DB0' }}
              />
            </Box>

            <UploadImage />

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
  );
};

export default RoomForm;

import {
  GridItem,
  Box,
  Text,
  Divider,
  Input,
  Checkbox,
  Button,
  Image,
  Heading,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import google from '../../images/google.svg';
import React from 'react';
import StyledInput from '../../components/Input';
import { ButtonBlock } from '../../components/Button';
import { Header, MediumText, SubHeader } from '../../components/Typography';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { ERROR_RESPONSE_END_WITH } from '../../constant';
import { useLoginMutation } from '../../generated/graphql';
import { pick } from 'lodash';
import { sharedUserValidationSchema } from '../../view-models/Account';
import * as Yup from 'yup';
import { FormField } from '../../components/formik/FormField';
import { SubmitButton } from '../../components/formik/SubmitButton';
import { useAppDispatch } from '../../redux/store';
import { signIn } from '../../redux/slices/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export interface SignInForm {
  email: string;
  password: string;
}
const signInValidationSchema = Yup.object().shape(
  pick(sharedUserValidationSchema, ['email', 'password']),
);

const RightSide = () => {
  const toast = useToast();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleSignIn = async (
    values: SignInForm,
    actions: FormikHelpers<SignInForm>,
  ) => {
    actions.setSubmitting(true);
    try {
      const resultAction = await dispatch(signIn(values));
      const payload = unwrapResult(resultAction);

      console.log('payload : ', payload);

      history.push('/');
    } catch (errorMessage) {
      actions.setSubmitting(false);

      toast({
        title: 'Error',
        description: errorMessage as string,
        status: 'error',
        isClosable: true,
      });
    }
  };

  return (
    <GridItem colSpan={{ base: 12, md: 12, lg: 7 }} bg="white">
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        <Box width={{ base: '75%', md: '50%', lg: '65%', '2xl': '500px' }}>
          <Header>Sign in Individual Account!</Header>

          <SubHeader>
            For the purpose of industry regulation, your details are required.
          </SubHeader>

          <Divider bg="#F5F5F5" mt="1em" />

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={signInValidationSchema}
            onSubmit={handleSignIn}>
            {(props: FormikProps<SignInForm>): JSX.Element => (
              <form onSubmit={props.handleSubmit}>
                <FormField
                  name="email"
                  placeholder="email"
                  type="email"
                  label="Email"
                />

                <FormErrorMessage>Hello</FormErrorMessage>

                <FormField
                  name="password"
                  placeholder="password"
                  type="password"
                  label="Password"
                />

                <Box display="flex" alignItems="center" mt="1.5em">
                  <Checkbox
                    defaultIsChecked
                    size="lg"
                    spacing="0.75em"
                    outline="none">
                    <Text
                      color="#696F79"
                      fontWeight="medium"
                      fontSize={{ base: '0.75em', lg: '0.875em' }}
                      lineHeight="19px">
                      I agree to terms & conditions
                    </Text>
                  </Checkbox>
                </Box>

                <SubmitButton>
                  <MediumText color="white">Sign in</MediumText>
                </SubmitButton>
              </form>
            )}
          </Formik>

          <Divider bg="#F5F5F5" mt="2em" />

          <ButtonBlock
            bg="white"
            shadow="0px 4px 10px 0px #00000014"
            _hover={{ bg: '#F5F5F5' }}>
            <Image src={google} mr="2em" />
            <MediumText color="#000000">Sign in with Google</MediumText>
          </ButtonBlock>

          <Divider bg="#F5F5F5" mt="2em" />

          <Text mt="1.25em" color="#0f51ad">
            <Link to="/sign-up">Not have an account? Sign up</Link>
          </Text>
        </Box>
      </Box>
    </GridItem>
  );
};

export default RightSide;

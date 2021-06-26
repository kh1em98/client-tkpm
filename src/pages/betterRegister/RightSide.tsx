import { Box, Divider, GridItem, Text, useToast } from '@chakra-ui/react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { pick } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormField } from '../../components/formik/FormField';
import { SubmitButton } from '../../components/formik/SubmitButton';
import { Header, MediumText, SubHeader } from '../../components/Typography';
import { useLoginMutation } from '../../generated/graphql';
import { userSelector } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store';
import { authService } from '../../services/index';
import { sharedUserValidationSchema } from '../../view-models/Account';

export interface SignUpForm {
  email: string;
  username: string;
  password: string;
  phone: string;
  age: string;
}
const signUpValidationSchema = Yup.object().shape(
  pick(sharedUserValidationSchema, [
    'email',
    'username',
    'age',
    'phone',
    'password',
  ]),
);

const RightSide = () => {
  const toast = useToast();
  const history = useHistory();
  const [, login] = useLoginMutation();
  const { isFetching } = useSelector(userSelector);
  const dispatch = useAppDispatch();

  const handleSignUp = async (
    values: SignUpForm,
    actions: FormikHelpers<SignUpForm>,
  ) => {
    actions.setSubmitting(true);
    try {
      await authService.signUp(values);

      toast({
        title: 'Success',
        description: 'Register successfully. Now login',
        status: 'success',
        isClosable: true,
      });

      history.push('/sign-in');
    } catch (e) {
      actions.setSubmitting(false);

      toast({
        title: 'Error',
        description: e.message,
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
          <Header>Sign Up Individual Account!</Header>

          <SubHeader>
            For the purpose of industry regulation, your details are required.
          </SubHeader>

          <Divider bg="#F5F5F5" mt="1em" />

          <Formik
            initialValues={{
              email: '',
              password: '',
              phone: '',
              age: '',
              username: '',
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSignUp}>
            {(props: FormikProps<SignUpForm>): JSX.Element => (
              <form onSubmit={props.handleSubmit}>
                <FormField
                  name="email"
                  placeholder="email"
                  type="email"
                  label="Email"
                />

                <FormField
                  name="username"
                  placeholder="username"
                  type="text"
                  label="Username"
                />

                <FormField
                  name="password"
                  placeholder="password"
                  type="password"
                  label="Password"
                />

                <FormField
                  name="phone"
                  placeholder="phone"
                  type="text"
                  label="Phone"
                />

                <FormField
                  name="age"
                  placeholder="age"
                  type="number"
                  label="Age"
                />

                <SubmitButton>
                  <MediumText color="white">Sign Up</MediumText>
                </SubmitButton>
              </form>
            )}
          </Formik>
        </Box>

        <Text mt="1.25em" color="#0f51ad">
          <Link to="/sign-in">Already have an account? Sign in</Link>
        </Text>
      </Box>
    </GridItem>
  );
};

export default RightSide;

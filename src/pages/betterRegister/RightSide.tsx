import { GridItem, Box, Text, Divider, Input, Checkbox, Button, Image, Heading, useToast, FormErrorMessage } from '@chakra-ui/react';
import React from 'react';
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
import axios from 'axios';

interface SignUpForm {
  email: string;
  username: string;
  password: string;
  phone: string;
  age: string;
}
const signUpValidationSchema = Yup.object().shape(pick(sharedUserValidationSchema, ['email', 'username', 'age', 'phone', 'password']));

const RightSide = () => {
  const toast = useToast();
  const history = useHistory()
  const [, login] = useLoginMutation();

  const handleSignUp = async (
    values: SignUpForm,
    actions: FormikHelpers<SignUpForm>,
  ) => {
    actions.setSubmitting(true);
    try {

      axios.post('http://192.168.1.8:8080/api/v1/sign-up');

      const { data } = await login({
        input: {
          ...values
        },

      });

      if (data?.login.__typename.endsWith(ERROR_RESPONSE_END_WITH)) {
        throw new Error((data.login as any).message);
      }

      history.push('/');
    } catch (e) {
      actions.setSubmitting(false);

      toast({
        title: "Error",
        description: (e as any).message,
        status: "error",
        isClosable: true,
      })

    }
  };


  return (
    <GridItem colSpan={{ base: 12, md: 12, lg: 7 }} bg="white">
      <Box height="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Box width={{ base: "75%", md: "50%", lg: "65%", "2xl": "500px" }}>
          <Header>
            Sign Up Individual Account!
          </Header>

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
              username: ''
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={handleSignUp}
          >
            {(props: FormikProps<SignUpForm>): JSX.Element => (
              <form onSubmit={props.handleSubmit}>
                <FormField
                  name="email"
                  placeholder='email'
                  type="email"
                  label="Email"
                />

                <FormField
                  name="username"
                  placeholder='username'
                  type="text"
                  label="Username"
                />

                <FormField
                  name="password"
                  placeholder='password'
                  type="password"
                  label="Password"
                />

                <FormField
                  name="phone"
                  placeholder='phone'
                  type="text"
                  label="Phone"
                />

                <FormField
                  name="age"
                  placeholder='age'
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

      <Link to="/sign-in">Already have account ? Sign In</Link>
    </GridItem >
  );
};

export default RightSide;

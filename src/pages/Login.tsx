import { FormErrorMessage, Heading, useToast } from '@chakra-ui/react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { pick } from 'lodash';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormField } from '../components/formik/FormField';
import { SubmitButton } from '../components/formik/SubmitButton';
import LandingLayout from '../components/layouts/LandingLayout';
import { ERROR_RESPONSE_END_WITH } from '../constant/index';
import { useLoginMutation } from '../generated/graphql';
import { sharedUserValidationSchema } from '../view-models/Account';


interface LoginForm {
  email: string;
  password: string;
}
const loginValidationSchema = Yup.object().shape(pick(sharedUserValidationSchema, ['email', 'password']));

const Login: FC = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const history = useHistory()
  const [, login] = useLoginMutation();

  const handleLogin = async (
    values: LoginForm,
    actions: FormikHelpers<LoginForm>,
  ) => {
    actions.setSubmitting(true);
    try {

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
        description: e.message,
        status: "error",
        isClosable: true,
      })

    }
  };


  return (
    <LandingLayout>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {(props: FormikProps<LoginForm>): JSX.Element => (
          <form onSubmit={props.handleSubmit}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              textAlign="center"
            >
              Login
            </Heading>

            <FormField
              name="email"
              placeholder={t('email')}
              icon="cil-user"
              type="email"
              label="Email"
              helperText="We will never share your email"
            />

            <FormErrorMessage>Hello</FormErrorMessage>

            <FormField
              name="password"
              placeholder={t('password')}
              icon="cil-lock-locked"
              type="password"
              label="Password"
            />

            <SubmitButton mt={5} colorScheme="blue" isFullWidth>
              Login
            </SubmitButton>

            <Link to="/tracking">Go to tracking</Link>
          </form>
        )}
      </Formik>
    </LandingLayout>
  );
};

export default Login;

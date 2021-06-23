import { Heading, useToast } from '@chakra-ui/react';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import pick from 'lodash/pick';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormField } from '../components/formik/FormField';
import { SubmitButton } from '../components/formik/SubmitButton';
import LandingLayout from '../components/layouts/LandingLayout';
import { ERROR_RESPONSE_END_WITH } from '../constant/index';
import { useRegisterMutation } from '../generated/graphql';
import { sharedUserValidationSchema } from '../view-models/Account';


export interface RegisterForm {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const registerValidationSchema = Yup.object().shape(
  pick(sharedUserValidationSchema, ['email', 'firstName', 'lastName', 'password']),
)

const Register: FC = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const [, register] = useRegisterMutation();
  const history = useHistory();

  const handleRegister = async (
    values: RegisterForm,
    actions: FormikHelpers<RegisterForm>,
  ) => {
    actions.setSubmitting(true);
    try {
      const response = await register({
        input: {
          ...values
        }
      });

      if (response.data?.register.__typename.endsWith(ERROR_RESPONSE_END_WITH)) {
        throw new Error((response.data.register as any).message);
      }


      toast({
        title: "Success",
        description: "Register successfully",
        status: "success",
        isClosable: true,
      })

      history.push('/login');
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
          firstName: '',
          lastName: ''
        }}
        onSubmit={handleRegister}
        validationSchema={registerValidationSchema}
      >
        {(props: FormikProps<RegisterForm>): JSX.Element => (
          <form onSubmit={props.handleSubmit}>
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              textAlign="center"
            >
              Register
            </Heading>
            <FormField
              name="firstName"
              placeholder={t('First name')}
              icon="cil-user"
              type="text"
              label="First name"
            />
            <FormField
              name="lastName"
              placeholder={t('Last name')}
              icon="cil-user"
              type="text"
              label="Last name"
            />


            <FormField
              name="email"
              placeholder={t('email')}
              icon="cil-user"
              type="email"
              label="Email"
              helperText="We will never share your email"
            />

            <FormField
              name="password"
              placeholder={t('password')}
              icon="cil-lock-locked"
              type="password"
              label="Password"
            />

            <SubmitButton mt={5} colorScheme="blue" isFullWidth>
              Register
            </SubmitButton>
          </form>
        )}
      </Formik>
    </LandingLayout>
  );
};

export default Register;


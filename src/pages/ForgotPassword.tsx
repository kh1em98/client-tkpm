import React from 'react'
import { Flex, Container, Heading, useToast } from '@chakra-ui/react'
import { FormikHelpers, Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormField } from '../components/formik/FormField';
import { SubmitButton } from '../components/formik/SubmitButton';

import * as Yup from 'yup';
import { useForgotPasswordMutation } from '../generated/graphql';
import { emailSchema } from '../view-models/CommonValidationSchemas';
import { useHistory } from 'react-router-dom';

const forgotPasswordValidationSchema = Yup.object().shape(
  {
    email: emailSchema
  }
);

interface ForgotPasswordForm { email: string }

const ForgotPassword = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const history = useHistory();

  const [, forgotPassword] = useForgotPasswordMutation();
  // useIsAuth();

  const handleForgotPassword = async (
    values: ForgotPasswordForm,
    actions: FormikHelpers<ForgotPasswordForm>,
  ) => {
    actions.setSubmitting(true);
    try {
      const { data } = await forgotPassword({
        email: values.email
      });

      if (!(data as any).forgotPassword) {
        throw new Error('Email not exist');
      }

      toast({
        title: "Success",
        description: "We sent link to your email",
        status: "success",
        isClosable: true,
      })

      history.push('/change-password')
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
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Container mt={10}>
        <Formik
          initialValues={{
            email: ''
          }}
          onSubmit={handleForgotPassword}
          validationSchema={forgotPasswordValidationSchema}
        >
          {(props: FormikProps<ForgotPasswordForm>): JSX.Element => (
            <form onSubmit={props.handleSubmit}>
              <Heading
                as="h2"
                size="xl"
                fontWeight="bold"
                textAlign="center"
              >
                Forgot Password
              </Heading>

              <FormField
                name="email"
                placeholder={t('email')}
                icon="cil-user"
                type="email"
                label="Email"
              />


              <SubmitButton mt={5} colorScheme="blue" isFullWidth>
                Send email
              </SubmitButton>
            </form>
          )}
        </Formik>
      </Container>

    </Flex>
  );
}


export default ForgotPassword;

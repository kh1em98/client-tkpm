import React from 'react'
import { Flex, Container, Heading, useToast } from '@chakra-ui/react'
import { FormikHelpers, Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import { FormField } from '../components/formik/FormField';
import { SubmitButton } from '../components/formik/SubmitButton';

import * as Yup from 'yup';
import { useChangePasswordMutation } from '../generated/graphql';
import { emailSchema } from '../view-models/CommonValidationSchemas';
import { useHistory } from 'react-router-dom';

interface ChangePasswordForm { token: string; password: string }

const ChangePassword = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const history = useHistory();
  const [, changePassword] = useChangePasswordMutation();
  // useIsAuth();

  const handleChangePassword = async (
    values: ChangePasswordForm,
    actions: FormikHelpers<ChangePasswordForm>,
  ) => {
    actions.setSubmitting(true);
    try {
      const { data } = await changePassword({
        token: values.token,
        password: values.password
      });

      if (!(data as any).changePassword) {
        throw new Error('Change failed');
      }

      toast({
        title: "Success",
        description: "Changed password successfully",
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
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Container mt={10}>
        <Formik
          initialValues={{
            token: '',
            password: ''
          }}
          onSubmit={handleChangePassword}
        >
          {(props: FormikProps<ChangePasswordForm>): JSX.Element => (
            <form onSubmit={props.handleSubmit}>
              <Heading
                as="h2"
                size="xl"
                fontWeight="bold"
                textAlign="center"
              >
                Change Password
              </Heading>

              <FormField
                name="token"
                placeholder={t('token')}
                icon="cil-user"
                type="text"
                label="Token"
              />
              <FormField
                name="password"
                placeholder={t('password')}
                icon="cil-user"
                type="password"
                label="Password"
              />


              <SubmitButton mt={5} colorScheme="blue" isFullWidth>
                Change Password
              </SubmitButton>
            </form>
          )}
        </Formik>
      </Container>

    </Flex>
  );
}


export default ChangePassword;

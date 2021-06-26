import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';
import ContractForm from './contract/ContractForm';
import useIsAuth from '../hooks/useIsAuth';

const Contract = () => {
  useIsAuth();

  return (
    <AuthenticatedLayout>
      <Box margin="4em auto">
        <Heading
          fontSize="1.5em"
          color="#605DEC"
          fontWeight="bold"
          lineHeight="2em">
          Contract Information
        </Heading>

        <Text color="#7C8DB0" mt="1em" lineHeight="22px" fontSize="1.125em">
          Enter the required information for each contract and be sure that it
          exactly matches your personal information.
        </Text>
        <ContractForm />
      </Box>
    </AuthenticatedLayout>
  );
};

export default Contract;

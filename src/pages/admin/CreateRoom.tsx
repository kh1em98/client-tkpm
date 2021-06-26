import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import RoomForm from './RoomForm';
import UploadImage from '../../components/upload/UploadImage';
import AuthenticatedLayout from '../../components/layouts/AuthenticatedLayout';

const CreateRoom = () => {
  return (
    <AuthenticatedLayout>
      <Box>
        <Heading
          lineHeight="2em"
          fontSize="1.5em"
          fontWeight="bold"
          color="#6E7491">
          As an admin, you can add more rooms to
          <Text display="inline-block" ml="0.35em" color="#605DEC">
            Booking
          </Text>
        </Heading>

        <RoomForm />
      </Box>
    </AuthenticatedLayout>
  );
};

export default CreateRoom;

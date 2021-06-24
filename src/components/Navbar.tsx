import { Box, Text, Heading, Image, Button, Divider } from '@chakra-ui/react';
import Room from './Room';

import React from 'react';
import Footer from './Footer';

const Navbar = () => {
  return (
    <Box
      padding="1.2em 0em"
      display="flex"
      alignItems="center"
      justifyContent="space-between">
      <Heading
        fontSize="1.75em"
        color="#605DEC"
        fontWeight="bold"
        cursor="pointer">
        Booking
      </Heading>

      <Box display="flex" alignItems="center">
        <Text
          color="#407AEA"
          _hover={{ color: '#407AEA' }}
          cursor="pointer"
          mr="4em">
          Hotels
        </Text>
        <Text
          color="#7C8DB0"
          _hover={{ color: '#407AEA' }}
          cursor="pointer"
          mr="4em">
          History
        </Text>
        <Button
          bg="#605DEC"
          _hover={{ bg: '#5452d1' }}
          color="FAFAFA"
          padding="0.75em 1.25em">
          <Text color="#FAFAFA" fontWeight="normal">
            Sign Out
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;

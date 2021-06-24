import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import Rating from './Rating';

const RatingPreview = () => {
  return (
    <Box mt="8em">
      <Heading
        textAlign="center"
        lineHeight="1.75em"
        fontSize="1.5em"
        fontWeight="semibold"
        color="#6E7491">
        What users saying in
        <Text display="inline-block" ml="0.35em" color="#605DEC">
          Booking
        </Text>
      </Heading>

      <HStack mt="2em" spacing="3em">
        <Rating />
        <Rating />
        <Rating />
      </HStack>
    </Box>
  );
};

export default RatingPreview;

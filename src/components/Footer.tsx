import { Box, HStack, Text } from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" pb="2em">
      <HStack spacing="1em">
        <FaFacebookSquare fontSize="2em" color="#6E7491" />
        <FaInstagram fontSize="2em" color="#6E7491" />
        <FaTwitter fontSize="2em" color="#6E7491" />
      </HStack>

      <Text color="#7C8DB0" fontSize="1.125em">
        © 2020 Tripma incorporated
      </Text>

    </Box>
  )
}

export default Footer

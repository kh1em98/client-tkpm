import { Box, Divider, Heading, HStack, Text, VStack, Image } from '@chakra-ui/react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import appstore from '../images/appstore.png'
import googleplay from '../images/googleplay.png'
import React from 'react';

const Footer = () => {
  return (
    <Box mt="8em">
      <Box display="flex">
        <Heading
          fontSize="1.75em"
          color="#605DEC"
          fontWeight="bold"
          cursor="pointer">
          Booking
        </Heading>
        <Box ml="8em" flexGrow={1}>
          <Text
            fontSize="1.125em"
            color="#6e7491"
            lineHeight="2em"
            fontWeight="semibold">
            About
          </Text>
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            About Booking
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            How it works
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Career
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Press
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Blog
          </Text>
        </Box>
        <Box ml="4em" flexGrow={1}>
          <Text
            fontSize="1.125em"
            color="#6e7491"
            lineHeight="2em"
            fontWeight="semibold">
            Partner with us
          </Text>
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Partnership programs
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Affiliate program
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Connectivity partners
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Promotions and events
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Integrations
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Community
          </Text>
        </Box>
        <Box ml="4em" flexGrow={1}>
          <Text
            fontSize="1.125em"
            color="#6e7491"
            lineHeight="2em"
            fontWeight="semibold">
            Support
          </Text>
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Help Center
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Contact us
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Privacy Policy
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Terms of Service
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Trust and safety
          </Text>
        </Box>
        <Box ml="4em" flexGrow={1}>
          <Text
            fontSize="1.125em"
            color="#6e7491"
            lineHeight="2em"
            fontWeight="semibold">
            Get the app
          </Text>
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Booking for Android
          </Text>{' '}
          <Text color="#7C8DB0" mt="0.5em" lineHeight="22px">
            Booking for iOS
          </Text>{' '}
          <Image width="150px" height="45px" mt="0.75em" src={appstore} />
          <Image width="150px" height="45px" mt="0.75em" src={googleplay} />
        </Box>
      </Box>

      <Divider m="3em 0 2em 0" />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb="2em">
        <HStack spacing="1em">
          <FaFacebookSquare fontSize="2em" color="#6E7491" />
          <FaInstagram fontSize="2em" color="#6E7491" />
          <FaTwitter fontSize="2em" color="#6E7491" />
        </HStack>

        <Text color="#7C8DB0" fontSize="1.125em">
          © 2020 Tripma incorporated
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

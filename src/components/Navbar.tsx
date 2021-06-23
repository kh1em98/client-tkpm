import { Box, Text, Heading, Image, Button, Divider } from '@chakra-ui/react';
import world from '../images/world.svg';
import Room from './Room';
import shanghai from '../images/shanghai.png';


import React from 'react';
import Footer from './Footer';



const Navbar = () => {
  return (
    <Box
      width={{ base: '100vw', xl: '1440px' }}
      height="auto"
      overflow="auto"
      margin="0 auto"
      padding={{ base: '0 4em', xl: '0' }}
      paddingBottom="3em">
      <Box
        padding="1.2em 1.5em"
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

      <Image src={world} />

      <Box mt="1em">
        <Heading
          lineHeight="2em"
          fontSize="1.5em"
          fontWeight="bold"
          color="#6E7491">
          Find your next adventure with these
          <Text display="inline-block" ml="0.35em" color="#605DEC">
            booking deals
          </Text>
        </Heading>

        <Box mt="1.5em" display="flex" width="100%">
          <Room image={shanghai} name="The Bunds" price="549" />
          <Room image={shanghai} name="The Bunds" price="549" />
          <Room image={shanghai} name="The Bunds" price="549" />
        </Box>
      </Box>

      <Divider m="3em 0 2em 0" />

      <Footer />

    </Box>
  );
};

export default Navbar;

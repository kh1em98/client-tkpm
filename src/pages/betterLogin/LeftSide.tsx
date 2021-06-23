import React from 'react'
import { Box, GridItem, Text, Image } from '@chakra-ui/react';
import logo from '../../images/icon-oasis.svg';
import startQuote from '../../images/quote-start.svg';
import closeQuote from '../../images/l.svg';
import authorVerified from '../../images/author-verified.svg';

const LeftSide = () => {
  return (
    <GridItem colSpan={5} display={{ base: "none", md: "none", lg: "block" }}>
      <Box
        bgGradient="linear-gradient(0deg, rgba(21, 101, 216, 0.9), rgba(21, 101, 216, 0.9)), url('./../../images/left-banner.jpeg')"
        backgroundPosition="35% 10%"
        backgroundRepeat="no-repeat"
        height="100%"
        padding={{ base: "6em 4em", xl: "6em 7em" }}
      >

        <Box display="flex" alignItems="center">
          <Image src={logo} alt="icon" />
          <Text ml="0.75em" fontWeight="semibold" fontSize="1em" lineHeight="taller" color="white">Oasis.</Text>
        </Box>

        <Box mt={{ base: "8em", lg: "10.5em" }}>
          <Image src={startQuote} />
          <Text color="white" lineHeight="1.875em" fontSize="1.25em">
            The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.
          </Text>

          <Box mt="1.8em" display="flex" alignItems="center">
            <Text color="white" fontSize="1.2em" fontWeight="medium" mr="0.5em">Khiem Nguyen</Text>
            <Image src={authorVerified} alt="" />
          </Box>

          <Box mt="1.8em" display="flex" flexDirection="row-reverse" mr="2em">
            <Image src={closeQuote} alt="" />
          </Box>
        </Box>
      </Box>
    </GridItem>

  )
}

export default LeftSide

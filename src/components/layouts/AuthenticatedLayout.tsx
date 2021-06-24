import React from "react";
import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function LandingLayout({ children }) {
  return (
    <Box
      width={{ base: '100vw', xl: '1440px' }}
      height="auto"
      overflow="auto"
      margin="0 auto"
      padding={{ base: '0 4em', xl: '0' }}
      paddingBottom="3em">
      <Navbar />
      {children}

      <Footer />
    </Box>

  );
}

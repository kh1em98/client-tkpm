import { Container, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from '../sections/Header';

export const LandingLayout = (props: {
  children: ReactNode;
}) => (
  <>
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Container>{props.children}</Container>
    </Flex>
  </>
);

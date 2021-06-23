import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export const OnboardingLayout = (props: {
  children: ReactNode;
}) => (
  <Grid templateColumns="repeat(12, 1fr)" h="100vh" w="100vw" overflow="hidden">
    {props.children}
  </Grid>
);

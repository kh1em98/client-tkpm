import React from 'react'
import { Heading, Text } from '@chakra-ui/react';

export const Header = ({ children }) => {
  return (
    <Heading
      fontWeight="bold"
      fontSize={{ base: "1.25em", lg: "1.875em" }}
      lineHeight="2em"
      color="000000">
      {children}
    </Heading>
  )
}

export const SubHeader = ({ children }) => {
  return (
    <Text fontSize={{ base: "0.8em", lg: "1em" }} lineHeight="150%" color="#8692A6">
      {children}
    </Text>
  )
}

export const MediumText = ({
  color = "#000000"
  , ...otherProps }) => {
  const { children } = otherProps;

  return (
    <Text color={color} fontWeight="medium" lineHeight="19px" fontSize="1em" {...otherProps}>{children}</Text>
  )
}

export const LargeText = ({
  color = "#000000"
  , ...otherProps
}) => {
  const { children } = otherProps;

  return (
    <Text color={color} fontWeight="medium" lineHeight="2em" fontSize="2em" {...otherProps}>{children}</Text>
  )
}
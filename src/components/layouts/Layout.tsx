import React, { ReactNode } from "react";
import { Container, Flex } from "@chakra-ui/react";
import Header from "../sections/Header";

enum LayoutType {
  LANDING = 'landing',
  CONTAINER = 'container',
}

export default function Layout({ type, ...otherProps }) {
  let body: ReactNode;

  if (type === LayoutType.CONTAINER) {
    body = <Container>{otherProps.children}</Container>
  }
  else if (type === LayoutType.LANDING) {
    body = <>{otherProps.children} </>;
  }

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...otherProps}
    >
      <Header />
      {body}
    </Flex>
  );
}

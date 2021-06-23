import { Box } from '@chakra-ui/react'
import React from 'react'

const Container = ({ children }) => {
  return (
    <Box
      width="480px"
      background="#FAFAFF"
      height="100vh"
      margin="0 auto"
      padding="5em 1em">
      {children}
    </Box>
  )
}
export default Container;
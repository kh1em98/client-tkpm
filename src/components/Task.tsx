import React, { FC } from "react"
import { Box, Heading, HStack, IconButton, Stack, Text } from "@chakra-ui/react"
import { VscDebugStart, VscDebugStop } from 'react-icons/vsc';
import { ArrowRightIcon, CheckIcon } from '@chakra-ui/icons';

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>

      <HStack spacing="12px" mt={3}>
        <IconButton aria-label="Start time" colorScheme="green" icon={<VscDebugStart />} />
        <IconButton aria-label="Stop time" colorScheme="red" icon={<VscDebugStop />} />
        <IconButton aria-label="Complete task" colorScheme="blue" icon={<CheckIcon />} />

      </HStack>
    </Box>
  )
}

const Task: FC = () => {
  return (
    <Stack spacing={8}>
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
  )
}

export default Task;
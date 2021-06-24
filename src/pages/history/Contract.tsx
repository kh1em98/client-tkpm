import { Badge, Td, Tr } from '@chakra-ui/react'
import React, { FC } from 'react'

interface ContractProps {
  id?: number;
  room?: string;
  startTime?: string;
  endTime?: string;
  status?: string;
}

const Contract: FC<ContractProps> = ({
  id = 1,
  room = "Massage Dieu Thuyen",
  startTime = "24/06/2021 11:46 AM",
  endTime = "24/06/2021 11:46 AM",
  status = "success"
}) => {
  return (
    <Tr _hover={{ bg: "#F6F6FE", cursor: "pointer" }}>
      <Td>#{id}</Td>
      <Td>{room}</Td>
      <Td>{startTime}</Td>
      <Td>{endTime}</Td>
      <Td>
        <Badge colorScheme="green">Success</Badge>
      </Td>
    </Tr>
  )
}

export default Contract

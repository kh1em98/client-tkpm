import { Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Badge } from '@chakra-ui/react'
import React from 'react'
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout'
import Contract from './history/Contract'

const History = () => {
  return (
    <AuthenticatedLayout>
      <Table mt="6em" variant="simple">
        <Thead>
          <Tr>
            <Th>Contract Id</Th>
            <Th>Room</Th>
            <Th>Start Time</Th>
            <Th>End Time</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Contract />
          <Contract />
        </Tbody>
      </Table>
    </AuthenticatedLayout>
  )
}

export default History

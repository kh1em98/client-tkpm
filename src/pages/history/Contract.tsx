import { Badge, Td, Tr } from '@chakra-ui/react';
import React, { FC } from 'react';
import { formattedDate } from '../../utils/date';
import { RoomStatus } from '../../models/Room';
import { ContractStatus } from '../../models/Contract';

interface ContractProps {
  id?: number;
  roomId?: number;
  startTime?: Date;
  endTime?: Date;
  status?: string;
}

const Contract: FC<ContractProps> = ({
  id = 1,
  roomId = 2,
  startTime = new Date('2021-06-26T07:59:00.000Z'),
  endTime = new Date('2021-06-28T07:59:00.000Z'),
  status = ContractStatus.SUCCESS,
}) => {
  return (
    <Tr _hover={{ bg: '#F6F6FE', cursor: 'pointer' }}>
      <Td>#{id}</Td>
      <Td>{roomId}</Td>
      <Td>{formattedDate(startTime)}</Td>
      <Td>{formattedDate(endTime)}</Td>
      <Td>
        <Badge
          colorScheme={
            status === ContractStatus.SUCCESS
              ? 'green'
              : status === ContractStatus.PROGRESSING
              ? 'yellow'
              : 'red'
          }>
          {status}
        </Badge>
      </Td>
    </Tr>
  );
};

export default Contract;

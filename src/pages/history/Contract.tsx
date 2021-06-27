import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { Badge, IconButton, Td, Tr } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Role } from '../../models/Account';
import { ContractStatus } from '../../models/Contract';
import { useAppSelector } from '../../redux/store';
import { formattedDate } from '../../utils/date';

interface ContractProps {
  contractId?: string;
  roomId?: string;
  startTime?: Date;
  endTime?: Date;
  status?: string;
  onApprove?: (contractId: string) => {};
  onReject?: (contractId: string) => {};
}

const Contract: FC<ContractProps> = ({
  contractId,
  roomId,
  startTime = new Date('2021-06-26T07:59:00.000Z'),
  endTime = new Date('2021-06-28T07:59:00.000Z'),
  status = ContractStatus.COMPLETED,
  onApprove,
  onReject,
}) => {
  const userState = useAppSelector((state) => state.user);

  return (
    <Tr _hover={{ bg: '#F6F6FE', cursor: 'pointer' }}>
      <Td>{contractId}</Td>
      <Td>{roomId}</Td>
      <Td>{formattedDate(new Date(startTime))}</Td>
      <Td>{formattedDate(new Date(endTime))}</Td>
      <Td>
        {userState.role === Role.ADMIN ? (
          <>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="sm"
              onClick={() => onApprove!(contractId!)}
              icon={<CheckIcon />}
            />
            <IconButton
              colorScheme="red"
              aria-label="Call Segun"
              size="sm"
              ml="1em"
              onClick={() => onReject!(contractId!)}
              icon={<CloseIcon />}
            />
          </>
        ) : (
          <Badge
            colorScheme={
              status === ContractStatus.COMPLETED
                ? 'green'
                : status === ContractStatus.PROCESSING
                ? 'yellow'
                : 'red'
            }>
            {status}
          </Badge>
        )}
      </Td>
    </Tr>
  );
};

export default Contract;

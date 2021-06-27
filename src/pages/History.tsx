import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticatedLayout from '../components/layouts/AuthenticatedLayout';
import { Role } from '../models/Account';

import { Contract } from '../models/Contract';
import { useAppSelector } from '../redux/store';
import { contractService } from '../services/index';
import ContractComponent from './history/Contract';

const History = () => {
  const [contractList, setContractList] = useState<Array<Contract>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { isFetching, role, accountId } = useAppSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    const getContractList = async () => {
      setLoading(true);
      const contractList = await contractService.getContractList();
      setContractList(contractList);
      setLoading(false);
    };

    if (!isFetching) {
      if (role === Role.USER && accountId) {
        getContractList();
      } else {
        history.push('/sign-in');
      }
    }
  }, [isFetching, role, accountId]);
  return (
    <AuthenticatedLayout>
      <Table mt="6em" variant="simple">
        <Thead>
          <Tr>
            <Th>Contract Id</Th>
            <Th>Room Id</Th>
            <Th>Start Time</Th>
            <Th>End Time</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contractList.map((contract: Contract) => (
            <ContractComponent
              contractId={contract.contractId}
              roomId={contract.roomId}
              startTime={contract.startTime}
              endTime={contract.endTime}
              status={contract.status}
            />
          ))}
        </Tbody>
      </Table>
    </AuthenticatedLayout>
  );
};

export default History;

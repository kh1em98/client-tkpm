import { Table, Thead, Tr, Th, Tbody, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '../../components/layouts/AuthenticatedLayout';
import useIsAuth from '../../hooks/useIsAuth';
import { Contract } from '../../models/Contract';
import { contractService } from '../../services';
import ContractComponent from '../history/Contract';

const Contracts = () => {
  useIsAuth();
  const [contractList, setContractList] = useState<Array<Contract>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getContractList = async () => {
      setLoading(true);
      // const contractList = await contractService.getProgressingContractList();
      setContractList(contractList);
      setLoading(false);
    };

    getContractList();
  }, []);

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
          {loading ? (
            <Spinner size="xl" />
          ) : (
            contractList.map((contract: Contract) => (
              <ContractComponent
                id={contract.id}
                roomId={contract.id}
                startTime={contract.startTime}
                endTime={contract.endTime}
                status={contract.status}
              />
            ))
          )}
          <ContractComponent />
          <ContractComponent />
        </Tbody>
      </Table>
    </AuthenticatedLayout>
  );
};

export default Contracts;

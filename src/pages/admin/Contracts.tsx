import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AuthenticatedLayout from '../../components/layouts/AuthenticatedLayout';
import { Contract, ContractStatus } from '../../models/Contract';
import { contractService } from '../../services';
import ContractComponent from '../history/Contract';
import { useAppSelector } from '../../redux/store';
import { Role } from '../../models/Account';
import { useHistory } from 'react-router';

const Contracts = () => {
  const { role, isFetching, accountId } = useAppSelector((state) => state.user);
  const [contractList, setContractList] = useState<Array<Contract>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const history = useHistory();
  const toast = useToast();

  useEffect(() => {
    const getContractList = async () => {
      setLoading(true);
      const contractList = await contractService.getProgressingContractList();
      setContractList(contractList);
      setLoading(false);
    };

    if (role === Role.ADMIN) {
      getContractList();
    } else {
      history.push('/sign-in');
    }
  }, [role, isFetching]);

  const approveHandler = async (contractId: string) => {
    try {
      await contractService.approveContract(contractId, accountId);
      setContractList((prevContractList) =>
        prevContractList.filter(
          (contract) => contract.contractId !== contractId,
        ),
      );
      toast({
        title: 'Success',
        description: 'Approve contract successfully',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as any).message,
        status: 'error',
        isClosable: true,
      });
    }
  };

  const rejectHandler = async (contractId: string) => {
    try {
      await contractService.rejectContract(contractId, accountId);
      setContractList((prevContractList) =>
        prevContractList.filter(
          (contract) => contract.contractId !== contractId,
        ),
      );
      toast({
        title: 'Success',
        description: 'Reject contract successfully',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: (error as any).message,
        status: 'error',
        isClosable: true,
      });
    }
  };

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
          {loading || isFetching ? (
            <Spinner size="xl" />
          ) : (
            contractList.map((contract: Contract) => (
              <ContractComponent
                contractId={contract.contractId}
                roomId={contract.contractId}
                startTime={contract.startTime}
                endTime={contract.endTime}
                status={contract.status}
                onApprove={approveHandler}
                onReject={rejectHandler}
              />
            ))
          )}
        </Tbody>
      </Table>
    </AuthenticatedLayout>
  );
};

export default Contracts;

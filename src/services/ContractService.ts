import { ContractGateway } from './../gateways/ContractGateway';
import {
  Contract,
  ContractStatus,
  ContractCreateInput,
} from '../models/Contract';

export class ContractService {
  private contractGateway: ContractGateway;

  constructor(options: { contractGateway: ContractGateway }) {
    this.contractGateway = options.contractGateway;
  }

  public async getContractList(): Promise<Array<Contract>> {
    return this.contractGateway.getList();
  }

  public async getProgressingContractList(): Promise<Array<Contract>> {
    const contractList = await this.contractGateway.getList();
    return contractList.filter(
      (contract) => contract.status === ContractStatus.PROCESSING,
    );
  }

  public async createContract(
    contract: ContractCreateInput,
  ): Promise<Contract> {
    return this.contractGateway.create(contract);
  }

  public async approveContract(
    contractId: string,
    userId: string,
  ): Promise<void> {
    return this.contractGateway.approve(contractId, userId);
  }
  public async rejectContract(
    contractId: string,
    userId: string,
  ): Promise<void> {
    return this.contractGateway.reject(contractId, userId);
  }
}

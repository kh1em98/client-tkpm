import { ContractGateway } from './../gateways/ContractGateway';
import { Contract } from '../models/Contract';

export class ContractService {
  private contractGateway: ContractGateway;

  constructor(options: { contractGateway: ContractGateway }) {
    this.contractGateway = options.contractGateway;
  }

  public async getContractList(): Promise<Array<Contract>> {
    return this.contractGateway.getList();
  }

  public async createContract(contract: Contract): Promise<Contract> {
    return this.contractGateway.create(contract);
  }

  public async approveContract(contractId: number): Promise<void> {
    return this.contractGateway.approve(contractId);
  }
  public async rejectContract(contractId: number): Promise<void> {
    return this.contractGateway.reject(contractId);
  }
}

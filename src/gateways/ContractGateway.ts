import { AxiosInstance } from 'axios';
import {
  Contract,
  ContractStatus,
  ContractCreateInput,
} from '../models/Contract';

export class ContractGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async getList(): Promise<Array<Contract>> {
    const { data } = await this.restConnector.get('/contract/list');
    return data;
  }

  public async create(contract: ContractCreateInput): Promise<Contract> {
    const { data } = await this.restConnector.post('/contract', contract);
    return data;
  }

  public async approve(contractId: string, userId: string): Promise<void> {
    const { data } = await this.restConnector.put('/contract', {
      id: contractId,
      status: ContractStatus.COMPLETED,
      adminId: userId,
    });
    return data;
  }

  public async reject(contractId: string, userId: string): Promise<void> {
    const { data } = await this.restConnector.put('/contract', {
      contractId,
      status: ContractStatus.CANCEL,
      adminId: userId,
    });
    return data;
  }
}

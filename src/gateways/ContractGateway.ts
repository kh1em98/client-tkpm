import { AxiosInstance } from 'axios';
import { Contract, ContractStatus } from '../models/Contract';

export class ContractGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async getList(): Promise<Array<Contract>> {
    const { data } = await this.restConnector.get('/get_contract_list');
    return data;
  }

  public async create(contract: Contract): Promise<Contract> {
    const { data } = await this.restConnector.post(
      '/create_contract',
      contract,
    );
    return data;
  }

  public async approve(contractId: number): Promise<void> {
    const { data } = await this.restConnector.post('/update_contract', {
      id: contractId,
      status: ContractStatus.SUCCESS,
    });
    return data;
  }

  public async reject(contractId: number): Promise<void> {
    const { data } = await this.restConnector.post('/update_contract', {
      id: contractId,
      status: ContractStatus.REJECTED,
    });
    return data;
  }
}

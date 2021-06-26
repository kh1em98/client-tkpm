import { AxiosInstance } from 'axios';
import { Room } from '../models/Room';
import { Contract } from '../models/Contract';

const AUTHORIZATION_HEADER = 'Authorization';

export const ACCESS_TOKEN = 'accessToken';

export class RoomGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async getList(): Promise<Array<Room>> {
    const { data } = await this.restConnector.get('/get_room_list');
    return data;
  }

  public async create(room: Room): Promise<Room> {
    const { data } = await this.restConnector.post('/create_room', room);
    return data;
  }

  public async book(updatedRoom: Room): Promise<void> {
    const { data } = await this.restConnector.post('/update_room', updatedRoom);
    return data;
  }

  public async getById(id: number): Promise<Room> {
    const { data } = await this.restConnector.get(`/get_room_by_id/${id}`);
    return data;
  }

  public async createContract(contract: Contract): Promise<Contract> {
    const { data } = await this.restConnector.post(
      '/create_contract',
      contract,
    );
    return data;
  }
}

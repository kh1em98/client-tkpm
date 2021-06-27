import { AxiosInstance } from 'axios';
import { Room } from '../models/Room';
import { Contract } from '../models/Contract';
import { IRoomForm } from '../pages/admin/RoomForm';

const AUTHORIZATION_HEADER = 'Authorization';

export const ACCESS_TOKEN = 'accessToken';

export class RoomGateway {
  private restConnector: AxiosInstance;

  constructor(options: { restConnector: AxiosInstance }) {
    this.restConnector = options.restConnector;
  }

  public async getList(): Promise<Array<Room>> {
    const { data } = await this.restConnector.get('/room/list');
    return data;
  }

  public async create(room: IRoomForm): Promise<Room> {
    const { data } = await this.restConnector.post('/room', room);
    return data;
  }

  public async getById(id: number): Promise<Room> {
    const { data } = await this.restConnector.get(`/room?roomId=${id}`);
    return data;
  }
}

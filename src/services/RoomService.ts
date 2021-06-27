import { Room, RoomStatus } from '../models/Room';
import { RoomGateway } from '../gateways/RoomGateway';
import { Contract } from '../models/Contract';
import { IRoomForm } from '../pages/admin/RoomForm';

export class RoomService {
  private roomGateway: RoomGateway;

  constructor(options: { roomGateway: RoomGateway }) {
    this.roomGateway = options.roomGateway;
  }

  public async getRoomList(): Promise<Array<Room>> {
    return this.roomGateway.getList();
  }

  public async createRoom(room: IRoomForm): Promise<Room> {
    return this.roomGateway.create(room);
  }
  public async getRoomById(id: number): Promise<Room> {
    return this.roomGateway.getById(id);
  }
}

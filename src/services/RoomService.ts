import { Room } from '../models/Room';
import { RoomGateway } from '../gateways/RoomGateway';
import { Contract } from '../models/Contract';

export class RoomService {
  private roomGateway: RoomGateway;

  constructor(options: { roomGateway: RoomGateway }) {
    this.roomGateway = options.roomGateway;
  }

  public async getRoomList(): Promise<Array<Room>> {
    return this.roomGateway.getList();
  }

  public async createRoom(room: Room): Promise<Room> {
    return this.roomGateway.create(room);
  }

  public async bookRoom(updatedRoom: Room): Promise<void> {
    return this.roomGateway.book(updatedRoom);
  }

  public async getRoomById(id: number): Promise<Room> {
    return this.roomGateway.getById(id);
  }
  public async createContract(contract: Contract): Promise<Contract> {
    return this.roomGateway.createContract(contract);
  }
}

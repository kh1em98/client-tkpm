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
    // return this.roomGateway.create(room);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: room.name,
          price: room.price!,
          description: room.description,
          rate: room.rate!,
          image: room!.image!,
          status: RoomStatus.AVAILABLE,
        });
      }, 1000);
    });
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

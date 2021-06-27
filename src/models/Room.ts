export enum RoomStatus {
  AVAILABLE = 'Available',
  BOOKED = 'Booked',
}

export interface Room {
  roomId: string;
  name: string;
  price: number;
  status: RoomStatus;
  description: string;
  rate: number;
  image: string;
}

export interface CreateRoomInput {
  name: string;
  price: number;
  status: RoomStatus;
  description: string;
  rate: number;
  image: string;
}

export enum RoomStatus {
  AVAILABLE = 'Available',
  BOOKED = 'Booked',
}

export interface Room {
  id: number;
  name: string;
  price: number;
  status: RoomStatus;
  description?: string;
  rate: number;
  image: string;
}

export interface RoomForm {
  name: string;
  price: number;
  status: RoomStatus;
  description: string;
  rate: number;
  image: string;
}

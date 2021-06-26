export enum ContractStatus {
  SUCCESS = 'success',
  PROGRESSING = 'progressing',
  REJECTED = 'rejected',
}

export interface Contract {
  id?: number;
  userId: number;
  roomId: number;
  price: number;
  status?: ContractStatus;
  startTime: Date;
  endTime: Date;
}

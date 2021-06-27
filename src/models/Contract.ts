export enum ContractStatus {
  COMPLETED = 'Success',
  PROCESSING = 'Processing',
  CANCEL = 'Cancel',
}

export interface Contract {
  contractId: string;
  userId: string;
  roomId: string;
  price: number;
  status?: ContractStatus;
  startTime: Date;
  endTime: Date;
}

export interface ContractCreateInput {
  userId: string;
  roomId: string;
  startTime: Date;
  endTime: Date;
  price: number;
}

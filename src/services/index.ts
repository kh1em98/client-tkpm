import axios from 'axios';
import { AuthService } from './AuthService';
import { AuthGateway } from '../gateways/AuthGateway';
import { RoomGateway } from '../gateways/RoomGateway';
import { RoomService } from './RoomService';
import { ContractGateway } from '../gateways/ContractGateway';
import { ContractService } from './ContractService';

const restConnector = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

const authGateway = new AuthGateway({ restConnector });
const roomGateway = new RoomGateway({ restConnector });
const contractGateway = new ContractGateway({ restConnector });

export const authService = new AuthService({ authGateway });
export const roomService = new RoomService({ roomGateway });
export const contractService = new ContractService({ contractGateway });

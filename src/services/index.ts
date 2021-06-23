import axios from 'axios';
import { AuthService } from './AuthService';
import { AuthGateway } from '../gateways/AuthGateway';

const restConnector = axios.create({
  baseURL: 'http://localhost:8080/graphql',
});

const authGateway = new AuthGateway({ restConnector });

export const authService = new AuthService({ authGateway });

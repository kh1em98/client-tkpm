import _ from 'lodash';
import { LoginUser, Account } from '../models/Account';

export const getDecodedPayload = (token: string) => {
  console.log('token : ', token);
  let payload: any = window.atob(token);
  payload = JSON.parse(payload);

  return payload;
};

export const transformToLoginUser = (obj) => {
  return _.pick(obj, [
    'accountId',
    'email',
    'username',
    'age',
    'phone',
    'role',
  ]) as LoginUser;
};

export const formatToVnd = (price: number) => {
  return price.toLocaleString('it-IT', {
    style: 'currency',
    currency: 'VND',
  });
};

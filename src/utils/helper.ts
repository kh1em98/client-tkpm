import _ from 'lodash';
import { LoginUser, Account } from '../models/Account';

export const getDecodedPayload = (jwt: string) => {
  const dotPosition = jwt.indexOf('.');
  const nextDotPosition = jwt.lastIndexOf('.');

  console.log({ dotPosition, nextDotPosition });

  let payload: any = window.atob(
    jwt.substring(dotPosition + 1, nextDotPosition),
  );
  payload = JSON.parse(payload);

  return payload;
};

export const transformToLoginUser = (obj) => {
  return _.pick(obj, [
    'id',
    'email',
    'username',
    'age',
    'phone',
    'role',
  ]) as LoginUser;
};

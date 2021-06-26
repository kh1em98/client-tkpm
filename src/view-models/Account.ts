import * as Yup from 'yup';
import { constraint as AccountConstraint, Account } from '../models/Account';
import { emailSchema } from './CommonValidationSchemas';

export const sharedUserValidationSchema = {
  email: emailSchema,
  username: Yup.string().required().max(AccountConstraint.username.MAX_LENGTH),
  password: Yup.string()
    .required()
    .min(AccountConstraint.password.MIN_LENGTH)
    .max(AccountConstraint.password.MAX_LENGTH),
  phone: Yup.string()
    .required()
    .min(AccountConstraint.phone.MIN_LENGTH)
    .max(AccountConstraint.phone.MAX_LENGTH),
  age: Yup.number().required(),
};

export const roomSchema = {
  roomId: Yup.number().required(),
  pricePerDay: Yup.number().required(),
};

export const dateSchema = {
  startTime: Yup.date()
    .required()
    .min(new Date(new Date().valueOf() - 1000 * 60 * 60 * 24)),
  endTime: Yup.date()
    .required()
    .test('is-greater', 'end time should be greater', function (value) {
      const { startTime } = this.parent;
      return value! > startTime;
    }),
};

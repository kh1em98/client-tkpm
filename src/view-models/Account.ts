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

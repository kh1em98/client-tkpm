import * as Yup from 'yup';

export const roomSchema = {
  name: Yup.string().required(),
  price: Yup.number().required(),
  description: Yup.string().required(),
  rate: Yup.number().required().min(1).max(5),
};

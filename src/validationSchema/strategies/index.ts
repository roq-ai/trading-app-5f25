import * as yup from 'yup';

export const strategyValidationSchema = yup.object().shape({
  parameters: yup.string().required(),
  stock_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});

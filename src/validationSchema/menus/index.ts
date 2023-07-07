import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  item_name: yup.string().required(),
  price: yup.number().integer().required(),
  restaurant_id: yup.string().nullable(),
});

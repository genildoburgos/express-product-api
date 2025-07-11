import { ProductType } from '../utils/dateFormatter';

export function validateProductData(data: ProductType) {
  const errors: string[] = [];

  if (typeof data.name !== 'string') {
    errors.push('name not is string');
  }

  if (typeof data.description !== 'string') {
    errors.push('description not is string');
  }

  if (typeof data.price !== 'number') {
    errors.push('price not is number');
  }

  if (typeof data.quantity !== 'number') {
    errors.push('quantity not is number');
  }

  return errors;
}

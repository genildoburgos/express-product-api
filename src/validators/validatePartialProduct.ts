import { ProductType } from '../utils/productTypeInterface';

export function validatePartialProductData(data: ProductType) {
  const errors: string[] = [];

  if ('name' in data && typeof data.name !== 'string') {
    errors.push('name not is string');
  }
  if ('description' in data && typeof data.description !== 'string') {
    errors.push('description not is string');
  }
  if ('price' in data && typeof data.price !== 'number') {
    errors.push('price not is number');
  }
  if ('quantity' in data && typeof data.quantity !== 'number') {
    errors.push('quantity not is number');
  }

  return errors;
}

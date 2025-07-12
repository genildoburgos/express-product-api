import Product from '../models/productModel';
import { AppError } from '../errors/appError';
import { ProductType } from '../utils/productTypeInterface';
import { validateProductData } from '../validators/validateProduct';
import { validatePartialProductData } from '../validators/validatePartialProduct';

export const createProduct = async (data: ProductType) => {
  const validationErrors = validateProductData(data);
  if (validationErrors.length > 0) {
    throw new AppError(validationErrors, 400);
  }

  const existing = await Product.findOne({ where: { name: data.name } });
  if (existing) {
    throw new AppError(['name already registered'], 409);
  }

  const created = await Product.create(data as any);
  const result = created.toJSON();
  return result;
};

export const getAllProducts = async () => {
  const products = await Product.findAll();
  return products.map((p) => {
    const data = p.toJSON();
    return data;
  });
};

export const getProductById = async (id: string) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new AppError(['product not found'], 404);
  }
  const data = product.toJSON();
  data.created_at = formatDate(data.created_at);
  return data;
};

export const updateProduct = async (id: string, data: ProductType) => {
  const validationErrors = validatePartialProductData(data);
  if (validationErrors.length > 0) {
    throw new AppError(validationErrors, 400);
  }

  const [updated] = await Product.update(data, { where: { id } });
  if (!updated) {
    throw new AppError(['product not found'], 404);
  }

  if(data.name){
    const existing = await Product.findOne({ where: { name: data.name } });
    if (existing) {
      throw new AppError(['name already registered'], 409);
    }
  }

  const updatedProduct = await Product.findByPk(id);
  if (!updatedProduct) {
    throw new AppError(['an internal server error occurred'], 500);
  }

  const result = updatedProduct.toJSON();
  return result;
};

export const deleteProduct = async (id: string) => {
  const deleted = await Product.destroy({ where: { id } });
  if (!deleted) {
    throw new AppError(['product not found'], 404);
  }
};

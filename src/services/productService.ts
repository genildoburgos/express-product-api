import Product from '../models/productModel';
import { AppError } from '../errors/appError';
import {
  ProductTypePayload,
  ProductTypeResponse,
} from '../utils/productTypeInterface';
import { validateProductData } from '../validators/validateProduct';
import { validatePartialProductData } from '../validators/validatePartialProduct';

export const createProduct = async (data: ProductTypePayload) => {
  const validationErrors = validateProductData(data);
  if (validationErrors.length > 0) {
    throw new AppError(validationErrors, 400);
  }

  if (!data || Object.keys(data).length === 0) {
    throw new AppError(['data is required'], 400);
  }

  const existing = await Product.findOne({ where: { name: data.name } });
  if (existing) {
    throw new AppError(['name already registered'], 409);
  }

  const newProduct = {
    name: data.name,
    description: data.description,
    price: data.price,
    quantity: data.quantity,
  };

  const created = await Product.create(newProduct as any);
  const result: ProductTypeResponse = created.toJSON();
  result.price = Number(result.price);
  result.quantity = Number(result.quantity);
  return result;
};

export const getAllProducts = async () => {
  const products = await Product.findAll();
  return products.map((p) => {
    const data = p.toJSON();
    data.price = Number(data.price);
    data.quantity = Number(data.quantity);
    return data as ProductTypeResponse;
  });
};

export const getProductById = async (id: string) => {
  const numberValue: number = Number(id);
  if (isNaN(numberValue)) {
    throw new AppError(['id must be a number'], 400);
  }
  const product = await Product.findByPk(id);
  if (!product) {
    throw new AppError(['product not found'], 404);
  }
  const data: ProductTypeResponse = product.toJSON();
  data.price = Number(data.price);
  data.quantity = Number(data.quantity);
  return data;
};

export const updateProduct = async (id: string, data: ProductTypePayload) => {
  const numberValue: number = Number(id);
  if (isNaN(numberValue)) {
    throw new AppError(['id must be a number'], 400);
  }

  const validationErrors = validatePartialProductData(data);
  if (validationErrors.length > 0) {
    throw new AppError(validationErrors, 400);
  }

  if (!data || Object.keys(data).length === 0) {
    throw new AppError(['data is required'], 400);
  }

  const updateData: Partial<ProductTypePayload> = {};
  const { name, description, price, quantity } = data;

  if (name) {
    updateData.name = name;
  }
  if (description) {
    updateData.description = description;
  }
  if (price) {
    updateData.price = price;
  }
  if (quantity) {
    updateData.quantity = quantity;
  }

  const [updated] = await Product.update(updateData, { where: { id } });
  if (!updated) {
    throw new AppError(['product not found'], 404);
  }

  if (data.name) {
    const existing = await Product.findOne({ where: { name: data.name } });
    if (existing) {
      throw new AppError(['name already registered'], 409);
    }
  }

  const updatedProduct = await Product.findByPk(id);
  if (!updatedProduct) {
    throw new AppError(['an internal server error occurred'], 500);
  }

  const result: ProductTypeResponse = updatedProduct.toJSON();
  result.price = Number(result.price);
  result.quantity = Number(result.quantity);
  return result;
};

export const deleteProduct = async (id: string) => {
  const numberValue: number = Number(id);
  if (isNaN(numberValue)) {
    throw new AppError(['id must be a number'], 400);
  }
  const deleted = await Product.destroy({ where: { id } });
  if (!deleted) {
    throw new AppError(['product not found'], 404);
  }
};

import { Request, Response, NextFunction } from 'express';
import * as ProductService from '../services/productService';

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductService.createProduct(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductService.getAllProducts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductService.getProductById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await ProductService.updateProduct(req.params.id, req.body);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

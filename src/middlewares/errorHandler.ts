import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/appError';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ errors: err.errors });
  }

  res.status(500).json({ errors: ['an internal server error occurred'] });
};

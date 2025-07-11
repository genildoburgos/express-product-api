export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errors: string[];

  constructor(errors: string[] | string, statusCode: number = 400) {
    super(typeof errors === 'string' ? errors : errors.join(', '));
    this.statusCode = statusCode;
    this.errors = Array.isArray(errors) ? errors : [errors];
    Error.captureStackTrace(this, this.constructor);
  }
}

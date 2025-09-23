import { StatusCodes } from 'http-status-codes';

/**
 * Egy egyedi hiba osztály, amely tartalmazza a hibához tartozó státuszkódot.
 */
export class AppError extends Error {
  public status: number;
  public isOperational: boolean;
  public details?: string;

  constructor(
    message: string,
    status: number = StatusCodes.INTERNAL_SERVER_ERROR,
    isOperational = true,
    details?: string
  ) {
    super(message);
    this.status = status;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

// src/middleware/global.error.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from 'src/utils/app.error';
import { StatusCodes } from 'http-status-codes';

/**
 * Globális hibakezelő middleware.
 * Hibás esetben egy egyszerű hibakimenetet küldünk: { error: 'Internal Server Error' }.
 */
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Global error handler:', err);
  if (res.headersSent) {
    return next(err);
  }

  const status =
    err instanceof AppError ? err.status : StatusCodes.INTERNAL_SERVER_ERROR;
  const message =
    err instanceof AppError ? err.message : 'Internal Server Error';
  const details = err instanceof AppError && err.details ? err.details : null;

  const response: { error: string; details?: string | null } = {
    error: message,
  };
  if (details) response['details'] = details;

  res.status(status).json(response);
};

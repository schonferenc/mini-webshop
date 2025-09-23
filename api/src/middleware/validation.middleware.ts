import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { AppError } from 'src/utils/app.error';
import { StatusCodes } from 'http-status-codes';

/**
 * A validációs middleware, amely a megadott Joi sémával ellenőrzi a req.body és req.params kombinációt.
 * Ha a validáció sikertelen, egy AppError példányt dob 400-as státuszkóddal.
 */
export const validateRequest =
  (schema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    // Kombináljuk a body és params adatokat a validációhoz
    const dataToValidate = { ...req.body, ...req.params };

    const { error } = schema.validate(dataToValidate);
    if (error) {
      const errorMessages = error.details.map(detail => detail.message).join(', ');
      return next(
        new AppError(`Validation error: ${errorMessages}`, StatusCodes.BAD_REQUEST)
      );
    }
    next();
  };

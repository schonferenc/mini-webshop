// src/types/common.types.ts
import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export type Route = {
  method: 'get' | 'post' | 'put' | 'delete';
  route: string;
  handler: (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
  validation?: ObjectSchema;
  middleware?: ((req: Request, res: Response, next: NextFunction) => void)[];
};

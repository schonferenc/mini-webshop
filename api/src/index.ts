import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import config from 'src/config';
import { Route } from 'src/types/common.types';
import { globalErrorHandler } from 'src/middleware/global.error';
import { validateRequest } from 'src/middleware/validation.middleware';

import { sanitizeInput } from 'src/middleware/sanitize.middleware';
import { productsController } from 'src/controllers/product/product.controller';
import { cartController } from 'src/controllers/cart/cart.controller';

// Load environment variables
dotenv.config();

const app = express();

// Alap middleware-ek
app.use(helmet());
app.use(sanitizeInput());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(config.cors));

// Dinamikus útvonal regisztráció
const routes: Route[] = [...productsController, ...cartController];
routes.forEach((route) => {
  const middlewares: ((
    req: Request,
    res: Response,
    next: NextFunction
  ) => void)[] = [];
  if (route.validation) {
    middlewares.push(validateRequest(route.validation));
  }
  if (route.middleware) {
    middlewares.push(...route.middleware);
  }
  app[route.method](route.route, ...middlewares, route.handler);
});

// Globális hibakezelő middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next);
});

// Server indítása
const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

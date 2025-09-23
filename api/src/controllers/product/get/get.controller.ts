import { NextFunction, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { productsService } from 'src/services/product.service';
import { AppError } from 'src/utils/app.error';


export const productsGetController = {
  /**
   * Retrieves all products.
   */
  async getAllProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const products = await productsService.getAllProducts();

      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      console.error('Error retrieving all products:', error);
      next(
        new AppError(
          'Failed to retrieve products',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },

  /**
   * Retrieves a single product by ID.
   */
  async getProductById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        return next(
          new AppError('Product ID is required', StatusCodes.BAD_REQUEST)
        );
      }

      const product = await productsService.getProductById(parseInt(id));

      if (!product) {
        return next(
          new AppError('Product not found', StatusCodes.NOT_FOUND)
        );
      }

      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      console.error('Error retrieving product:', error);
      next(
        new AppError(
          'Failed to retrieve product',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },
};

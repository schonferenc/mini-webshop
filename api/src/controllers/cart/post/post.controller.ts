import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cartService } from 'src/services/cart.service';
import { AppError } from 'src/utils/app.error';

export const cartPostController = {
  /**
   * Adds a product to the cart.
   */
  async addToCart(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { sessionId, productId, quantity } = req.body;

      if (!sessionId || !productId || !quantity) {
        return next(
          new AppError(
            'Session ID, product ID, and quantity are required',
            StatusCodes.BAD_REQUEST
          )
        );
      }

      const cart = await cartService.addToCart({
        sessionId,
        productId: parseInt(productId),
        quantity: parseInt(quantity),
      });

      res.status(StatusCodes.OK).json(cart);
    } catch (error) {
      console.error('Error adding to cart:', error);
      next(
        new AppError(
          'Failed to add product to cart',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },
};
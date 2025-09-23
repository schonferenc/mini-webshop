import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cartService } from 'src/services/cart.service';
import { AppError } from 'src/utils/app.error';

export const cartPutController = {
  /**
   * Updates cart item quantity.
   */
  async updateCartItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { cartItemId } = req.params;
      const { quantity } = req.body;

      if (!cartItemId || quantity === undefined) {
        return next(
          new AppError(
            'Cart item ID and quantity are required',
            StatusCodes.BAD_REQUEST
          )
        );
      }

      await cartService.updateCartItem(
        parseInt(cartItemId),
        parseInt(quantity)
      );

      res.status(StatusCodes.OK).json({ message: 'Cart item updated successfully' });
    } catch (error) {
      console.error('Error updating cart item:', error);
      next(
        new AppError(
          'Failed to update cart item',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },
};
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cartService } from 'src/services/cart.service';
import { AppError } from 'src/utils/app.error';

export const cartDeleteController = {
  /**
   * Removes an item from the cart.
   */
  async removeCartItem(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { cartItemId } = req.params;

      if (!cartItemId) {
        return next(
          new AppError('Cart item ID is required', StatusCodes.BAD_REQUEST)
        );
      }

      await cartService.removeFromCart(parseInt(cartItemId));

      res.status(StatusCodes.OK).json({ message: 'Cart item removed successfully' });
    } catch (error) {
      console.error('Error removing cart item:', error);
      next(
        new AppError(
          'Failed to remove cart item',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },

  /**
   * Clears all items from the cart.
   */
  async clearCart(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { sessionId } = req.params;

      if (!sessionId) {
        return next(
          new AppError('Session ID is required', StatusCodes.BAD_REQUEST)
        );
      }

      await cartService.clearCart(sessionId);

      res.status(StatusCodes.OK).json({ message: 'Cart cleared successfully' });
    } catch (error) {
      console.error('Error clearing cart:', error);
      next(
        new AppError(
          'Failed to clear cart',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },
};
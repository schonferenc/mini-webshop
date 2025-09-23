import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { cartService } from 'src/services/cart.service';
import { AppError } from 'src/utils/app.error';

export const cartGetController = {
  /**
   * Retrieves cart by session ID.
   */
  async getCart(
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

      const cart = await cartService.getOrCreateCart(sessionId);

      res.status(StatusCodes.OK).json(cart);
    } catch (error) {
      console.error('Error retrieving cart:', error);
      next(
        new AppError(
          'Failed to retrieve cart',
          StatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  },
};
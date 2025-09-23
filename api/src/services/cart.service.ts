import { cartRepository } from 'src/repositories/cart.repository';
import { AddToCartRequest } from 'src/types/cart.types';

export const cartService = {
  /**
   * Gets or creates a cart for the given session ID.
   */
  async getOrCreateCart(sessionId: string) {
    let cart = await cartRepository.getCartBySessionId(sessionId);

    if (!cart) {
      cart = await cartRepository.createCart(sessionId);
    }

    return cart;
  },

  /**
   * Adds a product to the cart or updates quantity if already exists.
   */
  async addToCart(addToCartData: AddToCartRequest) {
    const { sessionId, productId, quantity } = addToCartData;

    const cart = await this.getOrCreateCart(sessionId);

    await cartRepository.upsertCartItem(cart.id, productId, quantity);

    // Return updated cart
    return cartRepository.getCartBySessionId(sessionId);
  },

  /**
   * Updates cart item quantity.
   */
  async updateCartItem(cartItemId: number, quantity: number): Promise<void> {
    if (quantity <= 0) {
      await cartRepository.removeCartItem(cartItemId);
    } else {
      await cartRepository.updateCartItemQuantity(cartItemId, quantity);
    }
  },

  /**
   * Removes an item from the cart.
   */
  async removeFromCart(cartItemId: number): Promise<void> {
    await cartRepository.removeCartItem(cartItemId);
  },

  /**
   * Clears all items from a cart.
   */
  async clearCart(sessionId: string): Promise<void> {
    const cart = await cartRepository.getCartBySessionId(sessionId);
    if (cart) {
      await cartRepository.clearCart(cart.id);
    }
  },
};
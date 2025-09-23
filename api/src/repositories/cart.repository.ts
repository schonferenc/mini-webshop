import { prisma } from 'src/client/prisma.client';

export const cartRepository = {
  /**
   * Retrieves cart by session ID with all items and product details.
   */
  async getCartBySessionId(sessionId: string) {
    return prisma.cart.findUnique({
      where: { sessionId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });
  },

  /**
   * Creates a new cart.
   */
  async createCart(sessionId: string) {
    return prisma.cart.create({
      data: { sessionId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });
  },

  /**
   * Adds or updates an item in the cart.
   */
  async upsertCartItem(cartId: number, productId: number, quantity: number) {
    return prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId,
          productId,
        },
      },
      update: {
        quantity,
      },
      create: {
        cartId,
        productId,
        quantity,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
          },
        },
      },
    });
  },

  /**
   * Updates cart item quantity.
   */
  async updateCartItemQuantity(cartItemId: number, quantity: number) {
    return prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            imageUrl: true,
          },
        },
      },
    });
  },

  /**
   * Removes an item from the cart.
   */
  async removeCartItem(cartItemId: number) {
    return prisma.cartItem.delete({
      where: { id: cartItemId },
    });
  },

  /**
   * Clears all items from a cart.
   */
  async clearCart(cartId: number) {
    return prisma.cartItem.deleteMany({
      where: { cartId },
    });
  },
};
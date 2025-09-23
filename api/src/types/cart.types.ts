// Use Prisma generated types instead
export type { Cart, CartItem } from '@prisma/client';

export interface AddToCartRequest {
  sessionId: string;
  productId: number;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}
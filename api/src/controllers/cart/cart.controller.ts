import { Route } from 'src/types/common.types';
import { cartGetController } from './get/get.controller';
import { cartPostController } from './post/post.controller';
import { cartPutController } from './put/put.controller';
import { cartDeleteController } from './delete/delete.controller';
import {
  addToCartSchema,
  updateCartItemSchema,
  sessionIdParamSchema,
  cartItemIdParamSchema
} from 'src/validations/cart.validations';

/**
 * cartController: Routes for Cart management.
 *
 * @type {Route[]}
 */
export const cartController: Route[] = [
  {
    method: 'get',
    route: '/cart/:sessionId',        // GET kosár session ID alapján
    handler: cartGetController.getCart,
    validation: sessionIdParamSchema,
  },
  {
    method: 'post',
    route: '/cart/add',               // POST termék hozzáadása kosárhoz
    handler: cartPostController.addToCart,
    validation: addToCartSchema,
  },
  {
    method: 'put',
    route: '/cart/item/:cartItemId',  // PUT kosár tétel mennyiségének frissítése
    handler: cartPutController.updateCartItem,
    validation: updateCartItemSchema.concat(cartItemIdParamSchema),
  },
  {
    method: 'delete',
    route: '/cart/item/:cartItemId',  // DELETE kosár tétel eltávolítása
    handler: cartDeleteController.removeCartItem,
    validation: cartItemIdParamSchema,
  },
  {
    method: 'delete',
    route: '/cart/:sessionId/clear', // DELETE kosár ürítése
    handler: cartDeleteController.clearCart,
    validation: sessionIdParamSchema,
  },
];
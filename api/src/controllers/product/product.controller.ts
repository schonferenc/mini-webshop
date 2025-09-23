import { Route } from 'src/types/common.types';
import { productsGetController } from './get/get.controller';
import { productIdParamSchema } from 'src/validations/product.validations';


/**
 * productsController: Routes for Products.
 *
 * @type {Route[]}
 */
export const productsController: Route[] = [
  {
    method: 'get',
    route: '/products/:id',    // GET egy termék ID alapján
    handler: productsGetController.getProductById,
    validation: productIdParamSchema,
  },
  {
    method: 'get',
    route: '/products',        // GET minden termék
    handler: productsGetController.getAllProducts,
  },
];

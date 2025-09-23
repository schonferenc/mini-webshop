import { productsRepository } from 'src/repositories/product.repository';
import { Product } from '@prisma/client';

export const productsService = {
  /**
   * Retrieves all products.
   *
   * @returns A promise resolving to an array of Product objects.
   */
  async getAllProducts(): Promise<Product[]> {
    return productsRepository.getAllProducts();
  },

  /**
   * Retrieves a single product by ID.
   *
   * @param id - The product ID.
   * @returns A promise resolving to a Product object or null.
   */
  async getProductById(id: number): Promise<Product | null> {
    return productsRepository.getProductById(id);
  },
};

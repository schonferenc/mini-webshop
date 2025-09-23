import { prisma } from 'src/client/prisma.client';

export const productsRepository = {
  /**
   * Retrieves all products.
   *
   * @returns A promise resolving to an array of Product objects.
   */
  async getAllProducts() {
    const products = await prisma.product.findMany();
    return products;
  },

  /**
   * Retrieves a single product by ID.
   *
   * @param id - The product ID.
   * @returns A promise resolving to a Product object or null.
   */
  async getProductById(id: number) {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return product;
  },
};

export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  imageUrl: string | null;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

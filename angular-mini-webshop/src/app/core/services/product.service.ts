import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { HttpService } from './api/http.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpService) {}

  async getAll(): Promise<Product[]> {
    return await this.http.get<Product[]>('/products');
  }

  async getProductById(id: number): Promise<Product | null> {
    return await this.http.get<Product>(`/products/${id}`);
  }
}

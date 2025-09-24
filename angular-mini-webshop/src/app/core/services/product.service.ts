import { Injectable, inject } from '@angular/core';

import { Product } from '@shared/models';
import { HttpService } from './api/http.service';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpService);

  async getAll(): Promise<Product[]> {
    return await this.http.get<Product[]>('/products');
  }

  async getProductById(id: number): Promise<Product | null> {
    return await this.http.get<Product>(`/products/${id}`);
  }
}

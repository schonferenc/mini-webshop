import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { ProductService } from '@core/services/product.service';
import { Product } from '@shared/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  readonly products = signal<Product[]>([]);
  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    this.loadProducts();
  }

  async loadProducts() {
    try {
      this.isLoading.set(true);
      this.error.set(null);
      const data = await this.productService.getAll();
      this.products.set(data);
    } catch (error) {
      console.error('Error loading products:', error);
      this.error.set('Failed to load products. Please try again later.');
    } finally {
      this.isLoading.set(false);
    }
  }

  goToProduct(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  retry() {
    this.loadProducts();
  }
}

import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products = signal<Product[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  constructor(private productService: ProductService, private router: Router) {
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

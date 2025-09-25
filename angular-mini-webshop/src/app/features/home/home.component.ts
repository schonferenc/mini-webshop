import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { Product } from '@shared/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);

  protected readonly featuredProducts = signal<Product[]>([]);

  async ngOnInit(): Promise<void> {
    await this.loadFeaturedProducts();
  }

  async loadFeaturedProducts(): Promise<void> {
    try {
      const products = await this.productService.getAll();
      this.featuredProducts.set(products.slice(0, 3));
    } catch (error) {
      console.error('Failed to load featured products:', error);
    }
  }

  protected viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  protected handleKeydown(event: KeyboardEvent, productId: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.viewProduct(productId);
    }
  }
}

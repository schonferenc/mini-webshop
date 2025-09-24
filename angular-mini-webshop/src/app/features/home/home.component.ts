import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { Product } from '@shared/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);

  featuredProducts = signal<Product[]>([]);

  async ngOnInit(): Promise<void> {
    try {
      const allProducts = await this.productService.getAll();
      this.featuredProducts.set(allProducts.slice(0, 3));
    } catch (error) {
      console.error('Failed to load featured products:', error);
    }
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}

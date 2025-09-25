import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { Product } from '@shared/models';
import { FeatureItemComponent } from "@app/shared/components/feature-item/feature-item.component";
import { Feature } from '@app/shared/types/ui.types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FeatureItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);

  protected readonly featuredProducts = signal<Product[]>([]);

  public features = signal<Feature[]>([
    { icon: 'inventory_2', title: 'Quality Products', description: 'Curated selection' },
    { icon: 'local_shipping', title: 'Fast Delivery', description: 'Free shipping over $50' },
    { icon: 'verified_user', title: 'Secure Payment', description: '100% safe checkout' },
  ]);


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

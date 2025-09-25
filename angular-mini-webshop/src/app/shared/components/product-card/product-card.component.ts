import { Component, input, output } from '@angular/core';
import { Product } from '@shared/models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  readonly product = input.required<Product>();
  readonly productClick = output<number>();
}
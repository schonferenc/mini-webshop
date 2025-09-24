import { Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  private router = inject(Router);

  // Signals for reactive data
  readonly cartItemCount = signal(0);
  readonly isMenuOpen = signal(false);

  // Computed values
  readonly cartLabel = computed(() =>
    `View cart (${this.cartItemCount()} item${this.cartItemCount() === 1 ? '' : 's'})`
  );

  readonly navItems = [
    { path: '/', label: 'Home', exact: true },
    { path: '/products', label: 'Products', exact: false },
    { path: '/cart', label: 'Cart', exact: false }
  ] as const;

  toggleMobileMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  onCartClick(): void {
    this.router.navigate(['/cart']);
  }

  onLogoClick(): void {
    this.router.navigate(['/']);
  }
}

import { Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.page').then((m) => m.ProductsPage),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./features/product/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.page').then((m) => m.CartPage),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

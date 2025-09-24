import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/home').then((m) => m.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('@features/products').then((m) => m.ProductsComponent),
  },
  {
    path: 'product/:id',
    loadComponent: () => import('@features/product').then((m) => m.ProductComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('@features/cart').then((m) => m.CartComponent),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' }
  ] as const;
}

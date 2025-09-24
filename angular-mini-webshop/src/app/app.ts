import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainLayoutComponent } from '@shared/layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('Mini Webshop');
}

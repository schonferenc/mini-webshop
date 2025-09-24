import { Component } from '@angular/core';
import { HeaderComponent } from '@shared/layout/header/header';
import { FooterComponent } from '@shared/layout/footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayoutComponent {

}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-item',
  standalone: true,
  templateUrl: './feature-item.component.html',
  styleUrl: './feature-item.component.scss',
})
export class FeatureItemComponent {
  icon = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-error-state',
  standalone: true,
  templateUrl: './error-state.component.html',
  styleUrl: './error-state.component.scss'
})
export class ErrorStateComponent {
  readonly title = input('Something went wrong');
  readonly message = input('Please try again or contact support if the problem persists.');
  readonly showRetry = input(true);
  readonly ariaDescribedBy = input('error-message-' + Math.random().toString(36).substr(2, 9));

  readonly retry = output<void>();
}
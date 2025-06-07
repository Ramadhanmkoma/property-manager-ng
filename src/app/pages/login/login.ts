import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'pm-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  #authService: Auth = inject(Auth);

  showError = false;
  errorMessage = '';

  credentials = {
    email: '',
    password: ''
  };

  login() {
    this.#authService.login(this.credentials).subscribe({
      next: (response) => {
        // ...existing code...
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.showError = true;
        setTimeout(() => this.showError = false, 3000); // Hide after 3s
      }
    });
  }
}

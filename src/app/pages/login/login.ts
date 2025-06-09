import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'pm-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
  ],
  // providers: [ToastrService],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private toastr: ToastrService) {}

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
        this.toastr.success('Login successful!', 'Success');
      },
      error: (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.showError = true;
        this.toastr.error('Login failed. Please check your credentials.', 'Error');
      }
    });
  }
}

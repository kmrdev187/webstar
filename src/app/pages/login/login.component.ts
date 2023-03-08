import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { setCookie } from 'src/app/utils';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {}

	loginForm = this.formBuilder.group({
		username: '',
		password: '',
	});

	loginError = '';

	onSubmit(): void {
		const { username, password } = this.loginForm.value;
		if (username && password) {
			this.authService.login(username, password).subscribe({
				next: (res: any) => {
					// console.log(res);
					setCookie('token', res.token);
					setCookie(
						'user',
						res.user.lastName + ' ' + res.user.firstName
					);
					this.router.navigate(['/']);
				},
				error: (error) => {
					this.loginError = error.error.error;
				},
			});
		} else {
			this.loginError = 'Felhasználónév és jelszó megadása kötelező!';
		}
		this.loginForm.reset();
	}
}

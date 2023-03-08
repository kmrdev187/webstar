import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { getCookieByName, deleteCookie } from 'src/app/utils';

@Component({
	selector: 'base-layout',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss'],
})
export class BaseLayoutComponent {
	url: string = '';
	user: string | null = null;
	bg2routes: string[] = ['/characters', '/edit'];

	logout() {
		deleteCookie('user');
		deleteCookie('token');
		this.router.navigate(['/login']);
	}

	constructor(private router: Router, private location: Location) {
		this.user = getCookieByName('user');
		this.location.onUrlChange((url) => {
			this.url = url;
		});
	}

	ngOnInit() {
		this.url = this.router.url;
	}
}

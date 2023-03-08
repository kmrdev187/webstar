import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivateChild,
	RouterStateSnapshot,
	Router,
} from '@angular/router';
import { getCookieByName } from '../utils';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
	constructor(private router: Router) {}
	canActivateChild(
		childRoute: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		const cookie = getCookieByName('token');
		if (cookie) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}

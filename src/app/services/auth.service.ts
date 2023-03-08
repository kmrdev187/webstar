import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl =
		'https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/';

	constructor(private http: HttpClient) {}

	login(username: string, password: string) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Applicant-Id': 'fcQHRW85',
		});

		return this.http.post(
			this.baseUrl,
			{ username, password },
			{ headers }
		);
	}
}

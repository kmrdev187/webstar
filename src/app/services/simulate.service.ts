import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCookieByName } from '../utils';

@Injectable({
	providedIn: 'root',
})
export class SimulateService {
	private baseUrl =
		'https://developer.webstar.hu/rest/frontend-felveteli/v2/simulate/';

	constructor(private http: HttpClient) {}

	postSimulate(dark: string, light: string) {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Applicant-Id': 'fcQHRW85',
			'Application-Authorization': `Bearer ${getCookieByName('token')}`,
		});
		return this.http.post(
			this.baseUrl,
			{
				dark,
				light,
			},
			{ headers }
		);
	}
}

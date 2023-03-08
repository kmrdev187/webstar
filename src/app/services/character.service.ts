import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getCookieByName } from '../utils';

@Injectable({
	providedIn: 'root',
})
export class CharacterService {
	private baseUrl =
		'https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/';

	constructor(private http: HttpClient) {}

	getCharacters() {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Applicant-Id': 'fcQHRW85',
			'Application-Authorization': `Bearer ${getCookieByName('token')}`,
		});
		return this.http.get(this.baseUrl, { headers });
	}
}
